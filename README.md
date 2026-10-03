# DWP Wyoming LLC website

A complete multi-page, Vercel-ready corporate website for **DWP Wyoming LLC**. The source uses Next.js App Router, TypeScript/TSX, local WebP photography and separate desktop/mobile hero MP4 files. It is statically exported to `out/`, so every public route is available as HTML without a running server or a database. The owner-supplied public domain is `dwpwyomingllc.com`; account-related actions lead to the separate `https://app.dwpwyomingllc.com` application.

## Run and deploy

Use Node.js 22 and npm 10. The lockfile pins the dependency tree.

```sh
npm ci
npm run dev                 # http://localhost:3000
npm run check               # TypeScript diagnostics
npm run build               # static export in out/
```

To deploy through Vercel, import this repository as a Next.js project. The committed `vercel.json` runs `npm run build` and serves `out/`. A conventional static host can upload the contents of `out/`; preserve the generated directory structure and trailing-slash paths. Domain/DNS configuration is not included. `public/manus-routes.json`, `robots.txt`, and `sitemap.xml` describe the public page set.

The site has **18 routes**: Home, About, Business overview and three detail pages, Services overview and two detail pages, Global Opportunities, Crypto Learning and its Custody & Risk guide, Real Estate Learning and its Due Diligence guide, Contact, Privacy, Terms, and Disclosures. The navigation dropdowns link to real pages; a compact menu supplies equivalent routes on mobile.

## Media and interaction

All photographs are optimized local WebP files in `public/assets/images/`; no page-load image generation is used. `src/content/media.ts` maps every photo to a single visible placement so cards and sections do not repeat the same image. The editorial cards without photography use original inline SVG icons and CSS illustrations. The wordmark is replaceable at `public/assets/logo.svg`; `public/favicon.svg` is a matching browser icon. Images are illustrative: they do **not** prove DWP staff, offices, projects, holdings, clients or results.

The hero uses `hero-desktop.mp4` (1280×720, 8 seconds) and `hero-mobile.mp4` (720×1280, 8 seconds). Both are silent, locally stored H.264 files. Matching local WebP frames appear before video; the page retains a poster if video fails, autoplay is blocked, reduced motion is requested or data saving is enabled. The preloader has a CSS time limit independent of JavaScript. Video is paused off screen. Desktop and mobile files are independently framed, not crops of the same footage.

The language selector uses a Google Translate script, requested only in the browser. Translation availability and third-party widget styling depend on Google's service; if it cannot initialize, the English source remains intact. The site's default is light mode; a chosen dark mode is stored in browser localStorage. The gallery supports arrows, dots, keyboard navigation, swipe, automatic advance and pause on hover/focus. The site respects reduced motion.

## Important publishing limitations

The Contact form validates Full Name, Email and Message (with optional Phone and Company) **but does not send data**: no verified mail endpoint or address was supplied, and the UI explicitly states this. Connect a real backend or form service before advertising it as an enquiry-delivery channel. Privacy, Terms and Disclosures are limited draft notices, not an owner-approved legal policy; have them reviewed and replaced before collection or regulated marketing. Do not add licensing, performance, office or partnership claims without documentation. Crypto and property articles are educational and not individualized advice.

## Source photography and usage

Images were selected individually from **Pexels** and free **Unsplash** results, optimized and stored locally. Their stated free-license terms permit website use; see [Pexels License](https://www.pexels.com/license/) and [Unsplash commercial-use guidance](https://help.unsplash.com/en/articles/2612315-can-i-use-unsplash-images-for-personal-or-commercial-projects). Do not imply the photographed people endorse DWP. Free stock portraits and locations are illustrative, not documentary photos of the company.

The corporate meeting sources cover `home-boardroom`, `business-overview`, `business-development`, `business-partnerships`, `services-overview` and `contact-conversation`. The architectural and site sources cover `learning-real-estate`, `learning-due-diligence`, `property-plan`, `services-corporate` and the Wyoming and Dubai pages. The market and device sources cover `learning-crypto`, `learning-custody`, `crypto-network`, `services-market`, `business-global-assets` and `mobile-business`. Separate stock images provide each of the four carousel slides. The responsive hero videos and their poster frames were produced for this project.

## Structure

| Path | Responsibility |
| --- | --- |
| `src/app/` | Routable TSX pages, route metadata, static HTML export and global CSS. |
| `src/content/` | Original page writing, navigation destinations and the one-placement-per-image map. |
| `src/components/` | Mega-menu, mobile accordion, translator, theme control, poster-first video hero, reveal, cards, gallery and honest contact form. |
| `public/assets/` | Local logos, photographs, posters and two independent MP4 files. |
| `public/manus-routes.json`, `robots.txt`, `sitemap.xml` | Public route declarations and indexing documents. |
| `vercel.json`, `next.config.ts`, `package-lock.json` | Static deployment and pinned build. |
