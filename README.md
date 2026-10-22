# markzoiku.com

Personal site of Mark Zoiku. Plain HTML, CSS and a few lines of JavaScript for the Accra clock. No build step, no framework, no third-party requests. Hosted on Vercel.

```
public/                 the website
  index.html            home page
  404.html              not-found page (Vercel serves it automatically)
  styles.css            all styles
  script.js             Accra clock
  cv/Mark_Zoiku_CV.pdf  the CV linked from the page
  fonts/                Inter, self-hosted (SIL OFL, see OFL.txt)
  og.png, favicon.svg, favicon-32.png, apple-touch-icon.png, icon-192.png, icon-512.png
  robots.txt, sitemap.xml, site.webmanifest
vercel.json             serve public/, security headers, caching, old CV redirect
```

## Preview

Open `public/index.html` in a browser, or run `npx serve public`.

## Deploy

Import the GitHub repository in Vercel. No settings to change: `vercel.json` points Vercel at `public/` and there is no build command. Add `markzoiku.com` and `www.markzoiku.com` under Settings, Domains, and set `www` to redirect to the apex domain. Every push to `main` deploys.

## Updating

Edit `public/index.html` and push. To update the CV, export the Google Doc as PDF, save it over `public/cv/Mark_Zoiku_CV.pdf` and push. If the page changes, update `<lastmod>` in `public/sitemap.xml`.
