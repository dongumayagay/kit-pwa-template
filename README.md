# SvelteKit PWA Template (legacy)

A personal experiment with **SvelteKit and an offline-capable service worker**, originally created on an early SvelteKit/Svelte 3 toolchain.

> **Status:** legacy starter/template. The package still uses old `next` version ranges and has **not** been migrated to SvelteKit 3 or deployed as a verified Cloudflare production app.

## What it demonstrates

- A custom service worker in [`src/service-worker.ts`](src/service-worker.ts).
- Precaching of bundled and static assets.
- Cache cleanup as versions change.
- Network-first fetching with a cached fallback for eligible GET requests.
- Sample UI routes and navigation components.

**Limitations:** Offline handling is demonstrative, not a complete production PWA strategy. Network-first responses are not guaranteed to be present in cache, and not all dynamic paths work offline. Review cache storage growth, updates, and stale content before reusing it in a real app.

## Development

```bash
npm install
npm run dev
```

```bash
npm run check
npm run build
npm run preview
```

Test offline behavior in a browser using a production build/preview and browser developer tools; service worker behavior in dev mode may differ.

## Maintenance

- [Dependabot](.github/dependabot.yml) checks npm dependencies weekly.
- No GitHub Actions workflows have been added.
- Bun conversion, fresh lockfile creation, latest SvelteKit migration, and Cloudflare deployment remain **pending** and must be validated before being advertised as complete.
