# Cloudvora.pk website

Custom websites and business software, built around how your business works.

Static site (HTML, CSS, JavaScript). No build step is needed to host it. Ready for Vercel.

## Files
- `index.html`, `work.html`, `services.html`, `why-us.html`, `about.html`, `contact.html`: main pages
- `privacy.html`, `terms.html`, `404.html`: legal and error pages
- `site.js`: menu, language switch, 3D hero, lamp, contact form
- `lang.js`: Urdu translation
- `style.css`: shared styles
- `sitemap.xml`, `robots.txt`, `llms.txt`, `site.webmanifest`: search engine and AI crawler files
- `vercel.json`: security headers and caching

## Deploy on Vercel
1. Put these files at the root of a GitHub repository.
2. In Vercel: Add New > Project > import the repository.
3. Framework Preset: **Other**. Leave build command and output directory empty. Deploy.

## Before going live (important for SEO)
- The site address is set to `https://cloudvoraglobal.vercel.app` in every page, `sitemap.xml`, `robots.txt` and `llms.txt`. If the address ever changes (for example a custom domain), ask for a rebuild so all of these are updated together.
- Contact form email backup: create a free form at formspree.io and paste its link into `FORM_URL` at the top of `site.js`. WhatsApp works without it.
- Optional: paste a Google Analytics ID into `GA` at the top of `site.js`.

## WhatsApp number
The official number is +92 317 7954335 (wa.me/923177954335). It is set in `site.js` (constant `WA`) and in the `href` of every WhatsApp button in the HTML pages, plus the structured data in each page head.

See `SEO-PLAYBOOK.md` for the ranking plan.
