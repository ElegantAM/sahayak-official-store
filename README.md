# Sahayak Official Store — GitHub Pages (Flat)

A dark, premium, single-file static store built for GitHub Pages. This is a flat, zero-dependency site you can host as-is.

## What's included
- `index.html` — Storefront with 9 digital products, dark premium UI, Buy Now buttons linking to Instamojo
- `404.html` — Friendly 404 page (same as index for single-page feel)
- `.nojekyll` — Disables Jekyll processing on GitHub Pages
- `manifest.json` — PWA manifest with start_url `/sahayak-official-store/`
- `sitemap.xml` — Basic sitemap for SEO
- `robots.txt` — Robots with sitemap reference
- `sw.js` — Service worker for offline caching (PWA)

## Products
1. CRM Manager — India (Contacts, Deals & Invoices)
2. DFY AI Productivity & Automation Toolkit 2026
3. UPSC CSE Ultimate Masterclass Notes (Prelims + Mains)
4. Placement Ready 2026 — The Only Kit a Fresher Actually Needs
5. Aegis-X: Instant Consumer Rights & Grievance Assessment
6. Excel to Invoice Generator (GST Ready) — Auto invoice template with GST calculations
7. Resume Builder Pro — ATS-optimized resumes, 20+ templates, cover letter pack
8. 100+ ChatGPT Prompts for Side Hustle India — Prompts for content, sales, freelancing
9. GST Bill Book Template (Editable Excel) — Print-ready GST bill book with auto totals

## Deploy to GitHub Pages
1. Create a new GitHub repo named `sahayak-official-store`.
2. Upload all files in this folder to the repo root.
3. In GitHub repo → Settings → Pages → Deploy from branch → `main` → `/ (root)`.
4. Site will be live at: `https://<yourusername>.github.io/sahayak-official-store/`

## Buy Now
All products link to: https://www.instamojo.com/@alp7963

## License
MIT — free to use and customize.

## Notes
- To update prices/links, edit `index.html` product section.
- PWA caching is enabled via `sw.js`. After updates, bump `CACHE` version in `sw.js`.
