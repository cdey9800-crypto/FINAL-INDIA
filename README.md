# FINAL-INDIA

A static website with Vercel Analytics and Speed Insights integration.

## Features

- ✅ Vercel Analytics (already integrated)
- ✅ Vercel Speed Insights (newly added)
- Multi-page story application with video content

## Vercel Speed Insights

This project includes Vercel Speed Insights to monitor web performance metrics (Core Web Vitals) including:
- Largest Contentful Paint (LCP)
- First Input Delay (FID) / Interaction to Next Paint (INP)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Time to First Byte (TTFB)

### How it works

Speed Insights is implemented using the official `@vercel/speed-insights` package (v2.0.0):

1. The `injectSpeedInsights()` function from the package is bundled into a browser-compatible script
2. The bundled script (`public/speed-insights.bundle.js`) is included in all HTML pages
3. Performance metrics are automatically collected and sent to Vercel when the site is deployed

### Development

To rebuild the Speed Insights bundle:

```bash
pnpm install
pnpm run build
```

This will regenerate `public/speed-insights.bundle.js` from the source file `src/speed-insights.js`.

### Deployment

The Speed Insights bundle is committed to the repository and will be served as a static asset. No additional build steps are required during deployment on Vercel.

## Project Structure

```
.
├── public/               # Static assets
│   ├── index.html       # Entry page (redirects to page1)
│   ├── page1/           # Story page 1
│   ├── page2/           # Story page 2
│   ├── page3/           # Story page 3
│   ├── page4/           # Story page 4
│   ├── page5/           # Story page 5
│   └── speed-insights.bundle.js  # Speed Insights script
├── src/
│   └── speed-insights.js  # Source for Speed Insights initialization
├── build.js             # Build script for Speed Insights bundle
├── package.json         # Dependencies
└── vercel.json          # Vercel configuration
```

## License

Copyright © 2026
