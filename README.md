# Grout Restorations — Static Next.js site

This project is ready for **traditional hosting** (cPanel/GoDaddy/Bluehost/etc.).
It builds to a static `out/` folder you can upload to `public_html`.

## Requirements
- Node.js 18+

## Setup
```bash
npm install
npm run build
npm run export
```

The static site will be in `out/`. Upload its **contents** to your host's `public_html/`.

## Local Development
```bash
npm run dev
```
Visit http://localhost:3000

## Customize
- Update phone/email/service area in `app/page.tsx`.
- Replace gallery images with your own.
- Add your social links in the footer.
- Tailwind styles are defined in `app/globals.css`.

## SEO
- Metadata is defined in `app/layout.tsx`.
- For Google indexing, add your domain to Search Console and submit the site.
