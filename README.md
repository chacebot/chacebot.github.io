# Chace Medeiros - Personal Website

Personal portfolio website for Chace Medeiros, built with React and TypeScript.

## Tech Stack

- **React** 18.2.0 - UI framework
- **TypeScript** 4.9.5 - Type safety
- **React Router** 6.21.1 - Client-side routing
- **React Bootstrap** 2.9.2 - UI components
- **Bootstrap** 5.3.2 - CSS framework
- **React Scripts** 5.0.1 - Build tooling (Create React App)

## Project Structure

```
src/
├── App.tsx                 # Main app component with routing
├── Common/                  # Shared components
│   ├── NavBar.tsx          # Navigation bar with mobile menu
│   ├── PageWrapper.tsx     # Page layout wrapper
│   └── ...
├── components/              # Reusable UI components
│   ├── AnimatedText.tsx    # Typewriter text animation
│   ├── BlockReveal.tsx     # Block reveal/wipe animation
│   ├── RevealText.tsx      # Scroll-triggered text reveal
│   ├── TextReveal.tsx      # Text reveal with intersection observer
│   ├── SectionTitle.tsx    # Section heading component
│   └── ...
├── Pages/                   # Page components
│   ├── Home.tsx            # Homepage with hero section
│   ├── Professional.tsx    # Professional projects page
│   ├── Personal.tsx        # Personal projects page
│   ├── Contact.tsx         # Contact page
│   └── ...
├── Content/                 # Content data and assets
│   ├── Professional/       # Professional project content
│   ├── Personal/           # Personal project content
│   └── Contact/            # Contact icons and assets
├── Styles/                  # Global styles
│   ├── index.css           # Main stylesheet
│   └── variables.ts        # Design system variables
└── hooks/                   # Custom React hooks
    └── useScrollAnimation.ts
```

## Dependencies

### Production Dependencies

- `react` & `react-dom` - React core libraries
- `react-router-dom` - Client-side routing
- `react-bootstrap` & `bootstrap` - UI component library
- `react-markdown` - Markdown rendering
- `react-responsive-carousel` - Image carousel component

### Development Dependencies

- `gh-pages` - GitHub Pages deployment
- `@testing-library/*` - Testing utilities
- `typescript` - TypeScript compiler
- `react-scripts` - Build and development tooling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

The site will be available at `http://localhost:3000`

### Build

Create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## Deployment

### GitHub Pages

Deploy to GitHub Pages:

```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Deploy to the `gh-pages` branch
3. Make the site available at the configured homepage URL

### GitHub Pages Configuration

- **Branch**: `gh-pages`
- **Directory**: `/root`
- **Homepage**: `https://chace.me/`

## Features

- **Responsive Design**: Mobile-first approach with full-screen overlay menu on mobile
- **Smooth Animations**: Block reveal wipe effects for text content
- **Scroll-triggered Animations**: Content animates as you scroll into view
- **Dark Theme**: Minimalist dark design with custom styling
- **Project Showcases**: Dedicated sections for professional and personal projects

## Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run deploy` - Build and deploy to GitHub Pages
