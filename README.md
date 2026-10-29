# Portfolio

Personal portfolio website of **Mahfozur Rahman**, a Full-Stack .NET & Angular developer based in Dhaka, Bangladesh.

**Live site:** <https://mahfozmt.github.io>

The site is a single page: hero, selected production systems, experience, AI-assisted engineering, open source, skills, certifications and contact. It was a hand-written static `index.html`; this repository is the same page rebuilt as an Angular application, with identical content and design.

## Tech stack

- [Angular](https://angular.dev) 21 with standalone components, signals, `@if` / `@for` / `@switch` control flow and zoneless change detection
- TypeScript in strict mode, no `any`
- Plain CSS: design tokens and shared primitives in `src/styles.css`, component styles next to each component (dark and light themes, responsive down to 320px, print styles)
- [Vitest](https://vitest.dev) with jsdom, run through the Angular CLI (`ng test`)
- GitHub Actions to test, build and deploy to GitHub Pages

There is no router, no backend and no analytics or tracking script. The production build is plain static files.

## Getting started

You need Node.js 20.19 or newer (the project is developed on Node 20) and npm.

```bash
npm ci          # install exactly what package-lock.json says
npm start       # dev server on http://localhost:4200
npm test        # unit tests in watch mode
npm run test:ci # unit tests, single run
npm run build   # production build into dist/portfolio/browser
```

`npm run format` formats the sources with Prettier (`format:check` only reports).

To look at the production build locally, serve the output folder with any static file server, for example:

```bash
npx http-server dist/portfolio/browser -p 4300
```

## Project structure

```text
src/
  index.html            SEO tags, Open Graph / Twitter cards, JSON-LD, fonts, no-flash theme script
  styles.css            design tokens, base styles, buttons, badges, section and card primitives, print rules
  app/
    app.ts / app.html   page shell: header, sections, footer, toast, back-to-top button
    components/         one folder per component (top-nav, hero, case-studies, experience, ai-section,
                        open-source, skills, credentials, contact, site-footer, toast, back-to-top,
                        and the small shared section-header, chip-list and arch-flow)
    data/               all page content as typed data (profile, case studies, experience, projects,
                        skills, credentials, AI section, navigation)
    models/             TypeScript interfaces for that data
    services/           theme, clipboard, toast and scroll state
    directives/         copy-email click handler
public/                 files copied to the site root: CV (PDF), portrait photo, certification badges
.github/workflows/      deploy.yml
```

Content lives in `src/app/data/*.data.ts`. To change a sentence on the site, edit the data file; the templates only describe layout. Fields whose name ends in `Html` may contain `<strong>` tags and are rendered through Angular's sanitiser; everything else is plain text.

The "Portfolio Website (this site)" card shows the Angular major version the site is actually built with (`VERSION.major`), so it stays correct after upgrades.

## Tests

`npm run test:ci` runs the unit tests with Vitest in jsdom, so no browser or window is needed (locally or in CI). They cover:

- theme toggle: applies `data-theme`, persists to `localStorage`, falls back to the OS preference, survives blocked storage
- copy-email buttons: use the Clipboard API, fall back to `execCommand`, show and hide the toast
- mobile menu: opens, closes, keeps `aria-expanded` in sync, closes when a link is chosen
- case-study category filter, back-to-top button, in-page link scrolling
- content integrity: every experience entry has a title, company and dates, plain-text fields contain no HTML entities, HTML fields only use well-formed `<strong>`, and so on
- page structure: one `h1`, landmarks, alt text on images, every nav link has a section

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`:

1. `npm ci`
2. unit tests
3. `npm run build`
4. upload `dist/portfolio/browser` as the Pages artifact
5. deploy it with `actions/deploy-pages`

The workflow can also be started by hand from the Actions tab. One-time setup in the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Because the site is served from the root of `mahfozmt.github.io`, `<base href="/">` is correct and no router fallback is needed. `photo.jpg` and `Mahfozur_Rahman_CV.pdf` stay at the site root because the Open Graph image and the JSON-LD data point at those URLs.

### Notes

- If `npm install` ever fails with `Cannot read properties of null (reading 'edgesOut')`, that is an npm 10 resolver bug that only shows up when there is no lockfile. Use `npm ci`, or npm 11 (`npx npm@11 install`).
- The production build leaves the Google Fonts `<link>` as written and does not inline critical CSS, so the output matches the original static page.

## About this build

Rebuilt with Angular 21 with the help of Claude Code, and reviewed by the site owner.
