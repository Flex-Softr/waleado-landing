# Waleado Landing Page

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

**High-converting, responsive marketing landing page and sales portal for Waleado — the enterprise WhatsApp automation and anti-ban marketing platform.**

</div>

---

## 📌 Overview

`waleado-landing` is a fresh, modern marketing site built with **Next.js 16 (App Router, Turbopack)**, **React 19**, and **Tailwind CSS v4**. It features interactive product demos, real-time ROI estimators, comprehensive feature matrices, transparent pricing, customer case studies, and dedicated multi-page routes.

---

## ✨ Features & Sections

- **Hero Showcase**: Interactive tabbed product preview (Multi-Device Hub, Spintax Campaign Wizard, Visual Chatbot Flow, Missed Call Auto-Responder, and Live Team Inbox).
- **Interactive Spintax Permutation Simulator**: Live recipient preview demonstrating AI text variation.
- **Dynamic ROI & Revenue Calculator**: Real-time sliders for monthly contacts and order values calculating estimated ROI, revenue lift, and time saved.
- **6 Core Module Breakdowns**:
  1. Multi-Device WhatsApp Hub (QR scanning, battery monitor, pairing code)
  2. Smart Bulk AI Campaigns (Spintax variations, randomized jitter pacing)
  3. Visual Drag-and-Drop Chatbot Builder (Node logic, keyword triggers)
  4. Automated Missed Call Follow-Up (Instant 1.2s auto-reply)
  5. Omnichannel Live Chat Inbox (Synchronized team inbox)
  6. Group Grabber & Audience Segmenter (1-click group extraction, CSV importer)
- **6-Layer Anti-Ban Architecture**: Visualized safety mechanics.
- **Comparison Matrix**: Waleado vs Official WhatsApp Cloud API vs Unsafe Chrome Extensions.
- **Transparent Pricing**: Monthly / Annual toggle (20% discount badge) with detailed tier checklists.
- **Customer Stories & Social Proof**: Case studies with verified metrics.
- **Interactive FAQ Accordion**: Expandable common questions.
- **Dedicated Sub-Pages**:
  - `/features` — Comprehensive platform capabilities breakdown
  - `/solutions` — Tailored use cases for E-Commerce, Real Estate, Marketing Agencies & Support
  - `/pricing` — Dedicated plan comparison & checkout links
  - `/contact` — Interactive live demo & enterprise sales booking form
  - `/privacy` & `/terms` — Legal and compliance documentation

---

## 🚀 Quick Start Guide

### Prerequisites

- **Node.js**: `v20.9.0` or higher
- **Package Manager**: `npm`

### 1. Install Dependencies

```bash
npm install --ignore-scripts
```

### 2. Start Development Server

```bash
npm run dev
```

The landing page will be live at `http://localhost:3000` (or `http://localhost:3001` if port 3000 is occupied by `waleado-front`).

### 3. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Directory Structure

```
waleado-landing/
├── public/                     # Brand icons, logos, and vector assets
├── src/
│   ├── app/
│   │   ├── contact/page.tsx    # Demo booking & sales inquiry form
│   │   ├── features/page.tsx   # Detailed features deep-dive
│   │   ├── pricing/page.tsx    # Dedicated pricing & comparison
│   │   ├── privacy/page.tsx    # Privacy policy
│   │   ├── solutions/page.tsx  # Industry-tailored solutions
│   │   ├── terms/page.tsx      # Terms of service
│   │   ├── globals.css         # Tailwind v4 theme, glow & animations
│   │   ├── layout.tsx          # Root layout, Outfit font, metadata
│   │   └── page.tsx            # Main high-converting landing page
│   ├── components/
│   │   ├── anti-ban-section.tsx
│   │   ├── comparison-section.tsx
│   │   ├── cta-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── features-section.tsx
│   │   ├── footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── how-it-works.tsx
│   │   ├── navbar.tsx
│   │   ├── pricing-section.tsx
│   │   ├── roi-calculator.tsx
│   │   ├── social-proof.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── theme-toggle.tsx
│   │   └── providers/
│   │       └── theme-provider.tsx
│   └── lib/
│       └── utils.ts
├── package.json
└── tsconfig.json
```

---

## 📄 License

Proprietary Software — All rights reserved by Waleado & Flex-Softr.
