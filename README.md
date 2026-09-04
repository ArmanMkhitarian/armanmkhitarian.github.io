# armanmkhitarian.github.io

Personal portfolio site — Next.js (static export) on GitHub Pages.

## Editing content

All copy lives in [`lib/content.ts`](lib/content.ts): profile, stats, projects,
services, stack and experience. Components only lay that data out, so wording
and project changes never require touching JSX.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into out/
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: it builds the static
export and publishes `out/` to GitHub Pages.

One-time setup in the repository: **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

`public/.nojekyll` is required — without it GitHub would drop the `_next/`
directory and the site would load without styles.
