// science.io Cloud Sync Serverless API for Vercel
// 100% Free Forever • Zero Credit Drain • Cross-Device Live Sync
const SUPABASE_URL = "https://nidkkbsmptiyixvealum.supabase.co";
const SUPABASE_KEY = "sb_publishable_VIbgYVwvFU2bcPJNLWg4Qg_Be4paQ_6";
const BIN_URL = "https://extendsclass.com/api/json-storage/bin/bbaffcc";

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // GET: Fetch the live notes from Supabase (or fallback cloud storage)
  if (req.method === "GET") {
    try {
      const supaRes = await fetch(`${SUPABASE_URL}/rest/v1/science_notes?id=eq.curriculum&select=notes,updated_at`, {
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`
        }
      });
      if (supaRes.ok) {
        const rows = await supaRes.json();
        if (Array.isArray(rows) && rows.length > 0 && Array.isArray(rows[0].notes)) {
          return res.status(200).json({ notes: rows[0].notes, updatedAt: rows[0].updated_at });
        }
      }
    } catch (err) {}

    // Fallback: bin storage
    try {
      const cloudRes = await fetch(BIN_URL + "?t=" + Date.now(), {
        headers: { "Accept": "application/json" }
      });
      if (cloudRes.ok) {
        const data = await cloudRes.json();
        return res.status(200).json(data);
      }
      return res.status(500).json({ error: "Failed to fetch from cloud storage" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // POST or PUT: Update the live notes in Supabase (and backup to bin)
  if (req.method === "POST" || req.method === "PUT") {
    try {
      let bodyData = req.body;
      if (!bodyData && typeof req.on === "function") {
        const chunks = [];
        for await (const chunk of req) {
          chunks.push(chunk);
        }
        if (chunks.length > 0) {
          const raw = Buffer.concat(chunks).toString("utf8");
          try { bodyData = JSON.parse(raw); } catch (e) {}
        }
      } else if (typeof bodyData === "string") {
        try { bodyData = JSON.parse(bodyData); } catch (e) {}
      }

      const notes = (bodyData && Array.isArray(bodyData.notes))
        ? bodyData.notes
        : (Array.isArray(bodyData) ? bodyData : null);

      if (!notes) {
        return res.status(400).json({ error: "Missing notes array in request body" });
      }

      const updatedAt = new Date().toISOString();

      // Write to Supabase primary
      let supaOk = false;
      try {
        const sRes = await fetch(`${SUPABASE_URL}/rest/v1/science_notes`, {
          method: "POST",
          headers: {
            "apikey": SUPABASE_KEY,
            "Authorization": `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
            "Prefer": "resolution=merge-duplicates"
          },
          body: JSON.stringify({
            id: "curriculum",
            notes: notes,
            updated_at: updatedAt
          })
        });
        supaOk = sRes.ok;
      } catch (err) {}

      // Write to backup cloud bin
      try {
        await fetch(BIN_URL, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            app: "science.io",
            version: "3.5.0",
            updatedAt: updatedAt,
            notes: notes
          })
        });
      } catch (err) {}

      return res.status(200).json({
        success: true,
        count: notes.length,
        updatedAt: updatedAt,
        supabase: supaOk
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
};
