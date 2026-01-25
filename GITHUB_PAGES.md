# GitHub Pages Deployment Guide

This document describes how to configure and deploy the Nexus landing page to GitHub Pages.

## Automatic Deployment

This repository is configured for automatic deployment to GitHub Pages. When you push changes to the `main` branch, the site will automatically build and deploy.

### Workflow Overview

The deployment uses the `.github/workflows/deploy-pages.yml` workflow which:

1. **Triggers on**: Push to `main` branch or manual workflow dispatch
2. **Builds**: Runs `pnpm run build:pages` to create a static build
3. **Deploys**: Uploads the build artifacts to GitHub Pages

## Required GitHub Pages Configuration

To enable GitHub Pages deployment, you need to configure the repository settings:

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**

That's it! The workflow will handle the rest automatically.

### Step 2: Verify Deployment

After pushing to `main`, you can:

1. Go to the **Actions** tab to monitor the deployment workflow
2. Once complete, your site will be available at: `https://<username>.github.io/<repository-name>/`

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

## Environment Variables

The site uses environment variables for analytics configuration. These are injected at build time:

- `VITE_ANALYTICS_ENDPOINT`: Analytics endpoint URL
- `VITE_ANALYTICS_WEBSITE_ID`: Analytics website identifier

If these are not set, the analytics script will have placeholder values that won't affect the site functionality.

## Troubleshooting

### Build Failures

If the build fails:
1. Check the **Actions** tab for error logs
2. Ensure all dependencies are correctly specified in `package.json`
3. Run `pnpm run build:pages` locally to debug issues

### 404 Errors on Routes

If routes like `/product/govern` return 404:
1. Ensure the `404.html` file is being created during build
2. Verify the `build:pages` script includes the copy command
3. Check that GitHub Pages Source is set to "GitHub Actions"

### Assets Not Loading

If CSS, JS, or images don't load:
1. Check browser console for errors
2. Verify the base path is correct in `vite.config.ts`
3. Ensure all assets are in the `client/public` directory or imported correctly
