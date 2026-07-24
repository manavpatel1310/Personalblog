# Portfolio

High-performance public website starter built with **Astro**, **React**, **Tailwind CSS v4**,
**Preline UI**, and **Sanity** — content-driven, fully typed, and covered by **Playwright** E2E
tests.

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=flat&logo=sanity&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)
![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

<!--
  Add a screenshot here once you have one:
  ![Homepage screenshot](docs/screenshot.png)
-->

## Features

- ⚡ **Astro** static-first rendering — ships zero JS by default, React only where needed
- ⚛️ **React islands** for interactive UI (see the newsletter form on the homepage)
- 🎨 **Tailwind CSS v4** + **Preline UI** for fast, utility-first, accessible components
- 📝 **Sanity** headless CMS — edit content without touching code or redeploying
- ✅ **Playwright** E2E tests covering the core user flows
- 🧩 Fully typed end to end (`astro check` passes with zero errors)
- 🛟 Graceful fallback content everywhere — the site never breaks if the CMS isn't configured

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Astro](https://astro.build) (TypeScript, strict mode) |
| UI | [React](https://react.dev) islands |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + [Preline UI](https://preline.co) |
| Content | [Sanity](https://www.sanity.io) (headless CMS) |
| Testing | [Playwright](https://playwright.dev) |

## Project structure

```
/
├── src/
│   ├── components/      Header.astro, Footer.astro, NewsletterForm.tsx (React island)
│   ├── layouts/          Layout.astro — imports Tailwind, initializes Preline
│   ├── lib/sanity.ts     Sanity client + image URL builder (no-ops if unconfigured)
│   └── pages/            index.astro, blog/, [slug].astro (Sanity "page" documents)
├── studio/                Separate Sanity Studio project (own package.json)
├── tests/                 Playwright specs
└── playwright.config.ts
```

## Getting started

**Prerequisites:** Node.js 22+, npm

```bash
git clone https://github.com/manavpatel1310/Personalblog.git
cd Personalblog
npm install
npm run dev
```

Visit `http://localhost:4321`. Without Sanity configured, the homepage and blog pages show
graceful fallback content instead of erroring — the site works out of the box.

## Connecting Sanity

The Studio lives in [`studio/`](studio) as a **fully separate project** (its own `package.json`),
deliberately kept out of the frontend's dependency tree — the `@sanity/astro` package alone pulls
in Sanity's entire CLI/workbench toolchain, which isn't needed just to fetch content.

1. Create a free project at [sanity.io](https://www.sanity.io/) (or run `npx sanity login` from
   inside `studio/` to do it via the CLI).
2. Copy `studio/.env.example` → `studio/.env` and set your project ID.
3. Copy `.env.example` (repo root) → `.env` and set the same `PUBLIC_SANITY_PROJECT_ID`.
4. From `studio/`: `npm install && npm run dev` — opens the Studio at `http://localhost:3333`
   with two example schemas, `post` and `page`.
5. Publish a document, then reload the site:
   - `post` documents show up on `/` and `/blog`
   - `page` documents are rendered at `/<slug>`
6. When ready, `npm run deploy` from `studio/` hosts the Studio on Sanity's own infrastructure.

## Testing

```bash
npm run test       # headless Playwright run (builds + previews the site first)
npm run test:ui    # interactive Playwright UI
```

Only Chromium is installed by default:

```bash
npx playwright install firefox webkit
```

## Type checking

```bash
npm run astro check
```

## Roadmap

- [ ] Deploy the site (S3 + CloudFront, or Amplify Hosting, for a static Astro build)
- [ ] Add a Lambda + API Gateway backend if a dynamic API is needed (e.g. contact form)
- [ ] Deploy the Sanity Studio (`npm run deploy` from `studio/`)

## Live website
- https://personalblog-omega-seven.vercel.app/

## License
[MIT](LICENSE) © 2026 Manav Patel
