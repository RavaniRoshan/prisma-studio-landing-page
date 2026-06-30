<div align="center">

# 🎨 Prisma Studio Landing Page

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**A modern, animated Tailwind + React landing page inspired by Prisma Studio and Retool.**

[Features](#features) • [Quick Start](#quick-start) • [Project Structure](#project-structure) • [Deployment](#deployment) • [Contributing](#contributing)

</div>

---

## 🚀 Features

- **⚡ Vite 7 + React 19** — Lightning-fast development with the latest React
- **🎨 Tailwind CSS 4** — Utility-first styling with next-gen CSS features
- **✨ Framer Motion** — Smooth scroll-triggered and entrance animations
- **📦 Single-File Output** — Bundles everything into a single HTML file for easy hosting
- **📱 Fully Responsive** — Mobile-first design that looks great on every screen
- **🌙 Dark Theme** — Sleek, developer-friendly color palette (ink & cream)
- **🧩 Component Architecture** — Modular, reusable UI primitives
- **🔤 Modern Typography** — Inter + Instrument Serif for a premium feel

---

## 📸 Preview

<!-- Replace with a screenshot or GIF of your landing page -->
<p align="center">
  <img src="https://via.placeholder.com/1200x600/0a0a09/e9ebdf?text=Prisma+Studio+Landing+Page" alt="Preview" />
</p>

---

## 🛠 Tech Stack

| Category     | Technologies                                                               |
|--------------|----------------------------------------------------------------------------|
| **Framework**| React 19                                                                    |
| **Language** | TypeScript 5                                                                |
| **Build**    | Vite 7                                                                      |
| **Styling**  | Tailwind CSS 4                                                              |
| **Animation**| Framer Motion 12                                                            |
| **Icons**    | Lucide React                                                                |
| **Utils**    | `clsx` + `tailwind-merge` for className composition                         |

---

## 📦 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/RavaniRoshan/prisma-studio-landing-page.git
cd prisma-studio-landing-page

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```
> Open [http://localhost:5173](http://localhost:5173) to see the app.

### Build

```bash
npm run build
```
> Outputs a production-ready single-file site in `dist/index.html`.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
prisma-studio-landing-page/
├── dist/                  # Production build (single HTML file)
├── index.html             # Entry HTML (serves as template)
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration + single-file plugin
├── src/
│   ├── main.tsx           # App entry point with global styles
│   ├── App.tsx            # Root component and page composition
│   ├── index.css          # Base CSS (Tailwind + Custom utilities)
│   ├── components/        # Page sections and UI primitives
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── AppsMarquee.tsx
│   │   ├── BuildFromAnywhere.tsx
│   │   ├── WhyRetool.tsx
│   │   ├── CustomerLogos.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   ├── primitives.tsx # Reusable animation primitives
│   │   └── AppBuilderDemo.tsx
│   └── utils/
│       └── cn.ts          # Tailwind class merger utility
```

---

## 🚢 Deployment

Because this project uses [`vite-plugin-singlefile`](https://github.com/richardtallent/vite-plugin-singlefile), the entire application — including CSS and JS — is bundled into a **single `index.html`** file.

### Deploy to Netlify / Vercel / Cloudflare Pages

1. Push this repo to GitHub.
2. Connect the repository to your preferred host.
3. Set the **build command** to:
   ```bash
   npm run build
   ```
4. Set the **publish directory** to:
   ```
   dist
   ```
5. Deploy.

The resulting `dist/index.html` is self-contained and can be uploaded anywhere HTML files are accepted (GitHub Pages, S3, GitLab Pages, etc.).

---

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👤 Author

**Ravani Roshan**

- GitHub: [@RavaniRoshan](https://github.com/RavaniRoshan)

---

<p align="center">
  <sub>Built with ❤️ using React, TypeScript, and Tailwind CSS.</sub>
</p>