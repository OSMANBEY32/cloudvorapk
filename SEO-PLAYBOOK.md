# SEO playbook for Cloudvora.pk

## Already built into the site
- Unique title and description on every page, one H1 per page, clean heading order, skip link, semantic landmarks.
- Canonical URLs, Open Graph and Twitter cards with a 1200x630 share image.
- Structured data (JSON-LD): Organization + ProfessionalService with address and services, WebSite, WebPage, BreadcrumbList, Service (services page), ItemList of projects (work page), FAQPage (contact page).
- Menu and footer links are plain HTML, so search engines and AI crawlers can follow them without running JavaScript.
- All page content is real HTML text (the Work page project list is always in the page, even in 3D mode).
- sitemap.xml, robots.txt, llms.txt (for AI search), web manifest, favicon set, noindex on privacy, terms and 404.
- Speed: no heavy library on first paint, non-blocking fonts, lazy 3D, light mobile layout, reduced motion respected.
- Local signals: Dera Ghazi Khan, Pakistan in the footer, schema and meta tags; services written for restaurants, clinics, real estate and local brands.

## Do these in the first week (this is what moves rankings)
1. Deploy, make cloudvoraglobal.vercel.app the primary domain in Vercel (other domains should redirect to it), and open the live site once.
2. Google Search Console: add the domain, submit sitemap.xml, request indexing for the home page.
3. Bing Webmaster Tools: import from Search Console.
4. Google Business Profile: create a profile for Cloudvora (category: Website designer or Software company), address in Dera Ghazi Khan, the same phone and website. Keep name, address and phone identical everywhere.
5. Link the site from Instagram, Facebook, WhatsApp Business profile, LinkedIn, GitHub and any directory you use.
6. Ask every client for a Google review and a short written testimonial. Add real ones to the site.

## Content plan (add one page every 1-2 weeks)
- Case study pages, one per live project: problem, what was built, result. Target keywords like "restaurant website Pakistan", "POS software for restaurants Pakistan", "dental clinic website", "real estate website Pakistan".
- City pages once you have real clients there: "Web development in Dera Ghazi Khan", "Website design Multan", "Website design Lahore".
- Guides that answer buyer questions: "How much does a website cost in Pakistan", "Website vs Facebook page for a restaurant", "How to take orders on WhatsApp".
- Keep titles under about 60 characters and descriptions under about 160.

## Authority (backlinks)
- Ask clients to link to "Website by Cloudvora" in their footer (only when they agree).
- Local Pakistani business directories and startup lists, guest posts, and your own social profiles.

## Technical habits
- Run PageSpeed Insights on the live URL for the home and work pages every month; keep LCP under 2.5s and layout shift near 0.
- Check Search Console for crawl errors and which searches show your site.
- The Urdu version switches on the same URL. For Urdu search traffic later, build separate Urdu pages (for example /ur/) with hreflang tags.
