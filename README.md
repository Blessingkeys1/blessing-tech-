# Blessing Technologies — Professional Portfolio Website
### Brand: **Blessing Technologies** | Slogan: *"Building Tech. Building Legacy."*

A modern, responsive, high-performance personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. Showcases full-stack web engineering, backend architecture, offline software systems, church media production, and digital support services.

---

## 🌟 Key Highlights & Features

- **Personal Information & Brand Config**: Centrally managed in `src/data/portfolioData.ts`. Update your bio, contacts, projects, skills, and links in one place.
- **Hero & Landing View**: Interactive hero with electric blue and purple gradients, headline, subheadline, availability indicators, and quick action buttons.
- **About Section**: Authentic engineering journey as a dedicated Software Engineer, backend focus (Python, Django, PHP, SQL), and creative media capabilities.
- **Skills & Services**: Categorized cards covering Software Development, Creative Services, and Administrative/Remote Support with realistic proficiency levels.
- **Filterable Projects Portfolio**: Interactive gallery categorizing *Web Development*, *Software Systems*, *Mobile Applications*, and *Creative Media*. Includes:
  - **Faith Connect App** *(Christian Community Mobile Concept)*
  - **Wellspring School Management System** *(Offline Financial & Receipt Management Concept)*
  - **Blessing Technologies Website** *(Completed Brand Platform)*
  - **Church Media & Livestream Production** *(Completed Multi-Camera Broadcast Service)*
- **Experience & Education Timeline**: Interactive chronological milestones for engineering achievements, practical project leadership, and media operations.
- **Creative Media Showcase**: Visual gallery for video editing reels, livestreaming setups, promotional posters, and branding graphics with full-resolution lightboxes and video simulation modals.
- **Technical Blog**: Articles on offline-first software architecture, backend database integrity, and practical church streaming workflows.
- **Contact & Hire Me Hub**: Form with instant direct email submission (`blessingstechnologies4@gmail.com`), direct WhatsApp chat integration (`+256 709 344 655`), and phone call links.
- **Interactive CV Viewer & Downloader**: Dedicated in-app CV modal with print and direct HTML/PDF download capabilities.
- **Theme Toggle**: Seamless switching between dark navy mode (default) and clean modern light mode with saved state in `localStorage`.
- **Custom 404 Page**: Branded error handler for unmatched URLs.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or later, v24+ recommended)
- **npm** (v9+ or later) or **yarn** / **pnpm**
- **Git**

### 1. Installation

Clone or open the repository folder, then install dependencies:

```bash
npm install
```

### 2. Development Server

Start the local Vite development server with hot-module replacement (HMR):

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### 3. Production Build

Compile TypeScript and build the optimized production bundle:

```bash
npm run build
```

The production assets will be output to the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## ⚙️ Configuration & Customization

All personal details, links, media, and copy can be updated without altering component logic:

1. Open `src/data/portfolioData.ts`:
   - `profileData`: Name, title, slogan, bio, email, WhatsApp phone, location, social links.
   - `skillsData`: Core technical, creative, and administrative competencies.
   - `projectsData`: Add, edit, or adjust project statuses (`Completed`, `In Progress`, `Concept`), screenshots, and repository URLs.
   - `experienceData`: Education and practical milestones.
   - `creativeMediaData`: Posters, video reel showcases, and media descriptions.
   - `blogPostsData`: Technical articles, tags, and read times.
   - `testimonialsData`: Client and collaborator endorsements.

2. Replace images:
   - Profile avatar: replace `public/images/blessing-avatar.jpg` with your personal photo.
   - Project screenshots: replace or add images in `public/images/`.

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Blessing Technologies portfolio website"
   git branch -M main
   git remote add origin https://github.com/Blessingkeys1/blessing-tech-.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**.
3. Import your GitHub repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**.

### Deploying to Netlify

1. Drag and drop the `dist/` folder onto [Netlify Drop](https://app.netlify.com/drop), or connect your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploying to GitHub Pages

1. In `vite.config.ts`, set `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. Deploy the `dist` directory to the `gh-pages` branch using `gh-pages` or GitHub Actions.

---

## 📁 Project Architecture

```
BLESSING TECHNOLOGIES/
├── public/
│   ├── favicon.svg                   # Custom tech SVG brand favicon
│   ├── blessing-technologies-cv.html # Print-ready standalone CV document
│   └── images/                       # Optimized project & profile photography
│       ├── blessing-technologies-logo.png # Official brand logo
│       ├── blessing-avatar.jpg
│       ├── faith-connect.jpg
│       ├── wellspring-sms.jpg
│       ├── church-media.jpg
│       ├── blessing-tech.jpg
│       ├── creative-poster.jpg
│       └── video-editing.jpg
├── src/
│   ├── components/
│   │   ├── icons/              # Brand SVG icons (GitHub, LinkedIn, YouTube, Upwork)
│   │   ├── layout/             # Sticky Navbar & Footer
│   │   ├── modals/             # ProjectModal, MediaModal, BlogModal, CvModal
│   │   └── sections/           # Hero, About, Skills, Projects, Experience,
│   │                           # CreativeMedia, Blog, Testimonials, Contact
│   ├── context/
│   │   └── ThemeContext.tsx    # Light/Dark mode state with localStorage persistence
│   ├── data/
│   │   └── portfolioData.ts    # Central editable configuration data
│   ├── pages/
│   │   └── NotFound.tsx        # Branded 404 page
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Main application & routing shell
│   ├── index.css               # Tailwind CSS & design system tokens
│   └── main.tsx                # Application mount point
├── .env.example                # Environment variables template
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript compiler config
├── vite.config.ts              # Vite & Tailwind CSS v4 config
└── README.md                   # Project documentation
```

---

## 📄 License & Credits

Created for **Blessing Technologies**.  
*"Building Tech. Building Legacy."*
