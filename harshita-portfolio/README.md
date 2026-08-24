# Harshita — AI/ML Portfolio Website

A modern, highly interactive, scroll-driven personal portfolio website for **Harshita**, a 2nd-year B.Tech student specializing in Artificial Intelligence & Machine Learning at **GLA University, Mathura**.

---

## 🎨 Visual Identity & Theme

- **Palette**: Obsidian Black background (`#05070E`) + Elevated Dark Glass containers (`#0E1322`) + Electric Blue / Cyan / Indigo headers & accents (`#3B82F6` / `#38BDF8` / `#6366F1`) + Pure White body typography (`#FFFFFF`).
- **Typography**: `Space Grotesk` (Headings) + `Plus Jakarta Sans` (Body) + `JetBrains Mono` (Badges & Code).
- **Aesthetic**: Minimalist + High-Tech + Cinematic + Bold + Modern.

---

## 🎬 Animation Architecture

- **Smooth Inertia Scrolling**: Powered by [Lenis](https://lenis.darkroom.engineering/) with custom easing curves.
- **Scroll Progress & Custom Cursor**: Dynamic top progress bar and dual-ring spring cursor follower.
- **Masked Text Reveals**: Headings emerge through perspective clip-paths with word-by-word stagger.
- **Sticky / Pinned Sections**: Sticky columns in About & Journey sections.
- **3D Parallax & Tilt**: Hero shrinks on scroll down, developer visual has 3D depth, and project cards tilt on hover and scroll.
- **Dynamic Chart Animations**: Sales Analytical Dashboard bar charts grow into view upon scroll entry.

---

## 🧩 Sections Included

1. **Home (Hero)**: Masked greeting reveal, student subhead, parallax developer visual, dual glowing CTAs.
2. **01 / About**: Sticky academic standing at GLA University and cascading 3D growth cards (`01`, `02`, `03`, `04`).
3. **02 / Journey**: "Why AI?" narrative and interactive 6-stage roadmap (`Curiosity` → `Learning AI and Data` → `Practicing Skills` → `Building Projects` → `Improving Every Day` → `Becoming an AI Engineer`).
4. **03 / Skills**: Categorized toolkit with distinct "Currently Learning" pulsing cyan indicators (zero fake percentage bars).
5. **04 / Projects**: **Sales Analytical Dashboard** showcase with live preview chart mockup, KPI metrics, and expandable deep-dive Case Study modal.
6. **05 / Certification**: **Microsoft Certified: Azure Fundamentals** credential card with floating 3D badge and direct Credly verification link.
7. **06 / Contact & Footer**: LinkedIn connect action, copy profile helper, GitHub repository link, and interactive Introduction Note Helper.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) + [Lenis](https://lenis.darkroom.engineering/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Space Grotesk, Plus Jakarta Sans, JetBrains Mono (Google Fonts)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

```bash
# Clone or navigate to the repository
cd harshita-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 One-Click Deployment

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod
```

---

## 📄 License
MIT License © 2025 Harshita.
