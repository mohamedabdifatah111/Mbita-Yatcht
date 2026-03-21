# Mbita Yacht — Luxury Charter Website

A modern, responsive single-page yacht booking website for **Mbita Yacht**, Mombasa Kenya.

## Features
- 🛥️ **Yachts Fleet** — Tabbed charter packages with pricing
- 🍖 **F&B Menus** — Halal BBQ, Vegetarian, Finger Food, Swahili Cuisine, Drinks
- 🏄 **Water Sports** — Kayak Adventures, RHIB Rides, Electric Jetboard & more
- ❓ **FAQ Accordion** — Smooth expand/collapse
- 📬 **Contact Form** — With validation and success message
- 🗺️ **Google Maps** — Mombasa location embed
- 💬 **WhatsApp FAB** — Floating chat button
- 📱 **Fully Responsive** — Mobile-first design
- ✨ **Scroll Animations** — Fade-up reveal on scroll

## Tech Stack
- React 18
- Pure CSS (Tailwind-style custom CSS via `<style>` tag)
- Google Fonts: Cormorant Garamond + Montserrat

## Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation & Run

```bash
# 1. Navigate into the project folder
cd mbita-yacht

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

The optimised build will be in the `/build` folder, ready to deploy to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Project Structure

```
mbita-yacht/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── index.js            # React entry point
│   └── pages/
│       └── MbitaYacht.jsx  # Main single-page component (all sections)
├── package.json
└── README.md
```

## Customisation

All content is defined as data arrays at the top of `MbitaYacht.jsx`:
- `yachts` — Fleet data (name, price, specs, images)
- `fbMenus` — F&B menu packages
- `wsExtras` — Watersports add-ons
- `faqs` — FAQ questions and answers

Update contact details, phone numbers, and the WhatsApp link by searching for `+254 700 000 000` and replacing with your actual number.

## Credits
Design inspired by The Yacht Club Singapore (theyachtclub.sg).
Built for Mbita Yacht, Mombasa, Kenya.
