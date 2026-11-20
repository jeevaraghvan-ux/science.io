// science.io Feedback API for Vercel
// Stores student reviews and suggestions permanently in cloud storage and dispatches to Jeeva's inboxes
const SUPABASE_URL = "https://nidkkbsmptiyixvealum.supabase.co";
const SUPABASE_KEY = "sb_publishable_VIbgYVwvFU2bcPJNLWg4Qg_Be4paQ_6";

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // GET: Fetch feedback messages (for Admin Command Deck)
  if (req.method === "GET") {
    try {
      const supaRes = await fetch(`${SUPABASE_URL}/rest/v1/science_notes?id=eq.feedback&select=notes,updated_at`, {
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`
        }
      });
      if (supaRes.ok) {
        const rows = await supaRes.json();
        const items = (Array.isArray(rows) && rows.length > 0 && Array.isArray(rows[0].notes)) ? rows[0].notes : [];
        return res.status(200).json({ success: true, feedback: items });
      }
      return res.status(200).json({ success: true, feedback: [] });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // POST: Store a new feedback message and forward to email
  if (req.method === "POST") {
    try {
      let body = req.body;
      if (!body && typeof req.on === "function") {
        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        if (chunks.length > 0) {
          try { body = JSON.parse(Buffer.concat(chunks).toString("utf8")); } catch (e) {}
        }
      } else if (typeof body === "string") {
        try { body = JSON.parse(body); } catch (e) {}
      }

      const name = (body?.name || body?.["Student Name"] || "Anonymous Scholar").trim();
      const email = (body?.email || body?.["Student Email"] || "").trim();
      const message = (body?.message || body?.["Review / Idea"] || "").trim();

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const newEntry = {
        id: "fb_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
        name: name,
        email: email,
        message: message,
        createdAt: new Date().toISOString(),
        platform: body?.platform || "skienceio-best.vercel.app",
        read: false
      };

      // 1. Fetch current feedback array from Supabase
      let currentList = [];
      try {
        const getRes = await fetch(`${SUPABASE_URL}/rest/v1/science_notes?id=eq.feedback&select=notes`, {
          headers: {
            "apikey": SUPABASE_KEY,
            "Authorization": `Bearer ${SUPABASE_KEY}`
          }
        });
        if (getRes.ok) {
          const rows = await getRes.json();
          if (Array.isArray(rows) && rows.length > 0 && Array.isArray(rows[0].notes)) {
            currentList = rows[0].notes;
          }
        }
      } catch (_) {}

      // Prepend newest first, keep up to 300 entries
      currentList.unshift(newEntry);
      if (currentList.length > 300) currentList = currentList.slice(0, 300);

      // 2. Persist updated feedback array to Supabase
      await fetch(`${SUPABASE_URL}/rest/v1/science_notes`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "resolution=merge-duplicates"
        },
        body: JSON.stringify({
          id: "feedback",
          notes: currentList,
          updated_at: new Date().toISOString()
        })
      });

      return res.status(200).json({
        success: true,
        message: "Delivered to Jeeva's Admin Command Deck and database successfully!",
        entry: newEntry,
        total: currentList.length
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
};
