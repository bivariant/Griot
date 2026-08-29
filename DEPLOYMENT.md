# GitHub Pages deployment

This bundle is configured for the project site:

https://bivariant.github.io/Griot/

## Required GitHub repository setting

In **Settings → Pages → Build and deployment**, select:

**Source: GitHub Actions**

The workflow `.github/workflows/deploy-pages.yml` will build and deploy the static Next.js export on every push to `main`.

## Important

The repository name is currently hard-coded as `Griot` in `next.config.ts`.

If the repository is renamed, update:

```ts
const repoName = "Griot";
```

## Assets

Keep public assets under `public/`, for example:

```text
public/images/griot-logo.png
public/favicon.png
public/fonts/...
```

The existing font files and logo from the current project should be copied into the corresponding paths.
