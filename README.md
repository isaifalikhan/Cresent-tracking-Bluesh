# Crescent Tracking — Next.js Website

A modern, premium, conversion-focused website for Crescent Tracking (Pvt) Ltd, built with Next.js 14, TailwindCSS, Framer Motion, and GSAP.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: TailwindCSS + tailwindcss-animate
- **UI Components**: shadcn/ui patterns + custom components
- **Icons**: lucide-react
- **Animations**: Framer Motion + GSAP + ScrollTrigger
- **Smooth Scrolling**: @studio-freight/lenis
- **Intersection Observer**: react-intersection-observer
- **Forms**: react-hook-form + zod
- **Stats**: react-countup
- **SEO**: next-sitemap
- **Typography**: Manrope + Syne + JetBrains Mono (via next/font)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
/app
  /(marketing)         # Marketing pages with shared layout
    page.tsx           # Home
    about/page.tsx
    services/page.tsx
    industries/page.tsx
    solutions/page.tsx
    pricing/page.tsx
    case-studies/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
  /api/contact/route.ts  # Contact form API
  layout.tsx             # Root layout with fonts + Lenis
  globals.css

/components
  /layout              # Navbar, Footer, AnnouncementBar
  /sections            # Hero, Benefits, Solutions, etc.
  /ui                  # Reusable UI components
  /providers           # SmoothScrollProvider (Lenis)

/lib
  utils.ts             # cn() utility
```

## Design System

- **Primary**: Deep Green (#1a7a3c)
- **Accent**: Red (#c0392b)  
- **Background**: Slate-950 (#020617)
- **Typography**: Manrope (body), Syne (display)

## Features

- ✅ Sticky translucent navbar with dropdown menus
- ✅ Animated hero with route lines + radar pulses
- ✅ GSAP parallax scroll on hero background
- ✅ Animated countup stats
- ✅ Hover micro-interactions on all cards
- ✅ GSAP animated connecting line in How It Works
- ✅ Industry tabs with animated transitions
- ✅ Testimonial carousel
- ✅ FAQ accordion with smooth animation
- ✅ Contact form with zod validation
- ✅ Responsive mobile menu
- ✅ prefers-reduced-motion support
- ✅ Sitemap + robots.txt generation
- ✅ OpenGraph + Twitter meta tags
- ✅ Custom scrollbar styling

## Environment Variables

```env
SITE_URL=https://crescenttracking.com
```
