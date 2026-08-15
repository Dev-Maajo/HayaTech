# HayaTech — AI Automation Systems

The production source for [hayatech.dev](https://hayatech.dev).

HayaTech is positioned around custom AI automation: AI agents, n8n workflows,
WhatsApp systems, ecommerce operations, document intelligence, APIs, and
business integrations.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Deployment

The project uses the Next.js App Router and is ready for Vercel deployment.
Push the source to the connected GitHub repository; Vercel will run the
production build automatically.

## Main routes

- `/` — automation-first homepage
- `/services` — custom automation capabilities
- `/templates` — ready-to-deploy automation systems
- `/library` — curated automation resources
- `/projects/hayatools` — product case study
- `/about` — founder and working principles
- `/faqs` — project questions
- `/blog` — HayaTech notes
- `/privacy` — privacy policy

## Contact details

Contact URLs and email addresses are currently defined directly in the shared
navigation, footer, CTA, and page components.


## Published case studies

- `/projects` — Work & Case Studies index
- `/projects/d2c-ops-command-center` — D2C Ops Command Center concept case study
- `/projects/hayatools` — HayaTools product case study

The D2C case study is explicitly labelled as a HayaTech concept/demonstration
system and links to the live Vercel demo.
