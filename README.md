<p align="center">
  <img src="https://i.imgur.com/jUA5f5J.png" width="400"/>
  <br/>
  <em>Sentinels - Documentation</em>
</p>


## 👥 Team
- Deshaj Subedi - *Lead Developer*
- Agrim Mainali - *Content Writer / Brainstorming*
- Arpan Baral - *Quality Assurance / Tester*
- Yathartha Shrestha - *Designing / Wireframes*

---

## 📌 Project Type
Frontend-only Application Management Dashboard  

---

## 🚧 Status
Active (Static / No Backend)

---

## 🧠 Overview
**Sentinels** is a minimal, security-focused application management dashboard and curated job board.

It’s built for people who notice the weird log line at **2 a.m.** — the ones who take security seriously.

The platform features a **hand-picked set of roles**, a clean interface, and a mock dashboard where users can track applications and explore opportunities — all without requiring a backend.

---

## ✨ Key Features

- 🎯 Curated job board (6 placeholder roles)
- 📝 Individual job pages with application form
- 📊 Mock applicant dashboard (track & browse roles)
- 🧭 Smooth navigation & clean UX
- 🎨 Modern UI with:
  - Highlighted text effects
  - Underline animations
  - Glow effects
- 🧩 GSAP-powered animations:
  - ScrollTrigger-based reveals
  - Blinking effects
  - Scroll ticker
- 🖱️ Custom cursor interactions
- 🧱 Floating logo & blob animations
- 📬 Contact form *(non-functional — no backend)*
- 🔐 Simulated user authentication (UI only)

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3 (Modular Architecture)**
- **Vanilla JavaScript**
- **GSAP (ScrollTrigger - minimal usage)**
- **Google Fonts**
- **Tailwind CSS (utility usage where needed)**

---

## 📂 Project Structure

```
root/
│
├── index.html                                      # Landing page (Hero, About, Jobs, Contact)
├── index.yml                                       # Project metadata/config
│
├── assets/                                         # Static assets
│ └── svg/                                          # Shield logo, icons
│
├── css/                                            # Stylesheets (modular)
│ ├── variables.css                                 # Color variables & theme config
│ ├── layout.css                                    # Page structure & grid
│ ├── components.css                                # Reusable UI components
│ ├── animations.css                                # Animation keyframes & effects
│ ├── dashboard.css                                 # Dashboard-specific styles
│ ├── responsive.css                                # Media queries
│ └── styles.css                                    # Global styles entry
│
├── js/                                             # JavaScript logic
│ ├── main.js                                       # Entry point
│ ├── navigation.js                                 # Navigation handling
│ ├── animations.js                                 # GSAP + ScrollTrigger logic
│ ├── cursor.js                                     # Custom cursor system
│ └── form.js                                       # Form handling (UI only)
│
├── data/                                           # Static data
│ └── jobs.js                                       # Job listings (6 placeholders)
│
└── pages/                                          # Additional pages
├── job.html                                        # Job detail + apply form
└── dashboard.html                                  # User dashboard (mock)
```


---

## 🎨 Color Palette

Minimal and intentional — only **two core colors**:

- **Primary:** Deep Black / Dark Gray (not pure black, slightly softened)
- **Accent:** Muted Red (not overly bright, slightly toned)

This keeps the design **focused, sharp, and security-oriented**.

---

## 🔤 Typography

- Powered by **Google Fonts**
- Clean, modern, readability-focused type choices
- Consistent hierarchy for headings, labels, and UI text

---

## 🧩 Design Patterns

- Floating UI elements (logo, subtle motion)
- Blob background animations
- Scroll-triggered reveals (GSAP)
- Direction-aware block animations
- Text highlight & underline effects
- Glow and soft lighting effects
- Scroll ticker animation
- Hover transitions across components
- Custom text selection styling
- Responsive design across screen sizes

---

## ▶️ Getting Started

No build tools. No server. No setup headaches.

### Run Locally:
1. Download or clone the project
2. Open `index.html` in your browser

### Supported Browsers/Devices:
- Google Chrome
- Microsoft Edge
- Firefox
- Brave
- PC
- Mobile
- Tablet

---

## ✅ Project Checklist

- [x] Landing page (Hero, About, Jobs, Contact)
- [x] Job listing system (6 roles)
- [x] Individual job application page
- [x] Mock dashboard
- [x] Animations (GSAP ScrollTrigger)
- [x] Custom cursor
- [x] Responsive design
- [x] Modular CSS structure
- [x] Clean project architecture

---

## 📦 Dependencies

- **Google Fonts**
- **Tailwind CSS**
- **GSAP (ScrollTrigger)**

---

## 📜 License

This project is for **educational and demonstration purposes**.  
No commercial license is currently applied.

---

## ⚠️ Notes

- This is a **static frontend project**
- Forms and authentication are **non-functional (UI only)**
- Data is fully **mocked (jobs.js)**

---


