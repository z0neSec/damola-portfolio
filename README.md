# Adedolapo Ademola, RN | Portfolio

Single-page portfolio for a Registered Nurse and Medical Virtual Assistant.
Next.js (App Router), TypeScript, Tailwind CSS v4. Deploys to Vercel as a static page.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

- `src/data/content.ts`: services stages, work-sample tabs, roles, certificate links
- `src/components/`: one component per section. Client components: `Nav`, `ServicesJourney`, `WorkSample`
- `src/app/globals.css`: design tokens (`@theme`), keyframes, scroll-driven animations, reduced-motion rules
- `assets/`: headshot and OpenEMR screenshots
- Accent colour for light sections: `--accent` in `globals.css` (alternates listed there)

## Deploy

The canonical URL defaults to `https://ademolaadedolapo.me` (see `src/lib/site.ts`). Override with `NEXT_PUBLIC_SITE_URL` if needed. Add the domain in the Vercel project settings under Domains.

## Content rules

Contact by email and LinkedIn only. No phone, booking link or RN licence number. No em or en dashes in copy.
