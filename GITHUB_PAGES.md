# GitHub Pages Deployment Guide

This document describes how to configure and deploy the Nexus landing page to GitHub Pages.

## Automated Deployment with GitHub Actions

This repository uses GitHub Actions for automatic deployment to GitHub Pages. When you push to the `main` branch, the workflow automatically:
1. Installs dependencies
2. Builds the static site
3. Deploys to GitHub Pages

## Required GitHub Pages Configuration

To enable GitHub Pages deployment, you need to configure the repository settings:

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**

### Step 2: Deploy

Simply push your changes to the `main` branch. The GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) will automatically build and deploy your site.

Your site will be available at: `https://<username>.github.io/nexus-landing-page/`

### Manual Trigger

You can also manually trigger a deployment from the Actions tab:
1. Go to **Actions** tab in your repository
2. Select "Deploy to GitHub Pages" workflow
3. Click **Run workflow** → **Run workflow**

### Local Development and Testing

To test the build locally before pushing:

```bash
pnpm install
pnpm run build:pages
```

The built files will be in `dist/public/`.

## Build Scripts

| Script | Description |
|--------|-------------|
| `pnpm run build` | Full build including server (for production server deployment) |
| `pnpm run build:pages` | Client-only static build for GitHub Pages |

## SPA Routing Support

The build process creates a `404.html` file that is a copy of `index.html`. This enables client-side routing to work correctly on GitHub Pages. When a user navigates directly to a route like `/product/govern`, GitHub Pages serves the 404.html, which loads the app and handles the route client-side.

## Custom Domain (Optional)

If you want to use a custom domain:

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Add a `CNAME` file to the `client/public` directory with your domain name
4. Configure your DNS provider to point to GitHub Pages

## Troubleshooting

### Build Failures

If the build fails:
1. Ensure all dependencies are correctly specified in `package.json`
2. Run `pnpm run build:pages` locally to debug issues
3. Check the build output for error messages

### 404 Errors on Routes

If routes like `/product/govern` return 404:
1. Ensure the `404.html` file is being created during build
2. Verify the `build:pages` script includes the copy command
3. Check that GitHub Pages Source is set to **GitHub Actions** in repository settings

### Assets Not Loading

If CSS, JS, or images don't load:
1. Check browser console for errors
2. Verify the `base` path in `vite.config.ts` matches your repository name (`/nexus-landing-page/`)
3. Ensure all assets are in the `client/public` directory or imported correctly
4. Rebuild and redeploy after any configuration changes
