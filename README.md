<div align="center">

# 🔬 science.io
### *5th Grade Science Notes, Reimagined*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222222?style=for-the-badge&logo=github)](https://pages.github.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![made with love from Jeeva R.](https://img.shields.io/badge/Made%20with-❤️%20from%20Jeeva%20R-ff477e?style=for-the-badge)](#)

<p align="center">
  <b>A radiant, interactive digital notebook covering 5th Grade Science (Physical Science, Life Science, Earth & Space, and Scientific Inquiry) with structured concept squares, admin security vault, cross-device cloud publishing, and offline database persistence.</b>
</p>

[🌐 **Live Demo**](https://<your-username>.github.io/science.io/) • [✨ **Features**](#-features) • [☁️ **Cross-Device Sync**](#️-cross-device-notes-database) • [🚀 **Deploy**](#-publishing--hosting) • [💻 **Run Locally**](#-running-locally)

---

</div>

## ✨ Features

- 🌈 **Vibrant Neon Dark Mode & High-Tech Science Loader** — 3D gyroscopic orbital rings, quantum core orb, cyber grid, floating scientific glyphs (`⚛️`, `🧬`, `🔬`, `🪐`), and telemetry diagnostic logs.
- 🔒 **Admin Security Vault** — High-security animated safe door with 4-digit PIN authentication (Confidential clearance required), web administration deck, and Note Architect.
- 🔬 **Structured Science Unit Architect** — Build customized units with individual concept squares (hypothesis, formulas, definitions, observations, and tips).
- ☁️ **Instant Multi-Device Cloud Database Sync (Zero Credit Drain)** — Add notes on your computer, click **"PUBLISH ALL NOTES"**, and your notes are instantly available on your phone, tablet, or any other computer worldwide!
- 🎧 **Smooth ASMR Carousel Transitions** — Buttery cubic-bezier easing, motion depth, and tactile synthesized slide acoustic chimes.
- 🤖 **Interactive science.io AI Assistant** — Ask science questions, get help navigating, or explore 5th grade topics.
- 💡 **Science Cheat Sheet & Lab Tools** — Print-ready cheat sheet generator and scientific keyboard.

---

## ☁️ Cross-Device Notes Database & "Publish All Notes"

`science.io` includes **cross-device database sync with zero credit drain**:

### How It Works:
1. **Add Your Notes**: Open the **Admin Vault** (or click **Add My Notes**) and configure your units and concept squares.
2. **Click "PUBLISH ALL NOTES"**:
   - The top navigation bar and hero feature a **"🚀 PUBLISH ALL NOTES"** button.
   - When you click it, all your notes are instantly published to the secure cloud database (`database.json` & cloud REST store).
3. **Open On Any Device**:
   - Open `science.io` on your phone, tablet, or another computer.
   - The site automatically loads your published notes!
   - You can also scan the QR code displayed after publishing to instantly open the site on your phone.
4. **Zero Credit Drain**:
   - No continuous polling or background scripts.
   - Saves strictly on user action when you publish.

---

## 🚀 Publishing & Hosting

### Option A: GitHub Pages (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for science.io"
   ```
2. Create a new repository named `science.io` on [GitHub](https://github.com/new).
3. Connect and push:
   ```bash
   git remote add origin https://github.com/<your-username>/science.io.git
   git branch -M main
   git push -u origin main
   ```
4. In GitHub Repo: **Settings > Pages > Source**: Select branch `main` and `/ (root)`, then click **Save**.
5. Your app will be live at `https://<your-username>.github.io/science.io`.

### Option B: Node Server (Local Network & Hosting)
```bash
npm start
# Runs server.js on port 3000 and displays your local IP to connect from phones on Wi-Fi!
```

### Option C: Vercel / Netlify
- **Netlify**: Drop this entire folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for instant zero-config deployment.
- **Vercel**: Import your GitHub repo on [vercel.com](https://vercel.com) for automatic deployment previews on every commit.

---

## 💻 Running Locally

### Option 1: Node.js (Full REST API + Static Server)
```bash
npm start
# Or
node server.js
```

### Option 2: Visual Studio (.NET)
Open [`science.io.sln`](science.io.sln) and hit **F5** (or `dotnet run --project ConsoleApp1`) to launch the web client automatically in your default browser.

---

<div align="center">
  <sub>Crafted with precision & passion by <b>Jeeva R.</b> Released under the MIT License.</sub>
</div>
