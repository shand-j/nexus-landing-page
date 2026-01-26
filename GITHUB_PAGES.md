# GitHub Pages Deployment Guide

This document describes how to configure and deploy the Nexus landing page to GitHub Pages.

## Branch-Based Deployment

This repository is configured for deployment to GitHub Pages from a branch. The built files should be committed to a `gh-pages` branch which GitHub Pages will serve.

## Required GitHub Pages Configuration

To enable GitHub Pages deployment, you need to configure the repository settings:

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select `gh-pages` branch and `/ (root)` folder

### Step 2: Build and Deploy

To deploy the site:

1. Build the static site:
   ```bash
   pnpm install
   pnpm run build:pages
   ```

2. The built files will be in `dist/public/`. Deploy these to the `gh-pages` branch:
   ```bash
   # Create orphan gh-pages branch if it doesn't exist
   git checkout --orphan gh-pages
   
   # Clear the branch
   git rm -rf .
   
   # Copy the built files
   cp -r dist/public/* .
   
   # Commit and push
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages --force
   
   # Return to main branch
   git checkout main
   ```

3. Your site will be available at: `https://<username>.github.io/nexus-landing-page/`

### Alternative: Using gh-pages Package

You can also use the `gh-pages` npm package for easier deployment:

```bash
npx gh-pages -d dist/public
```

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
1. Ensure all dependencies are correctly specified in `package.json`
2. Run `pnpm run build:pages` locally to debug issues
3. Check the build output for error messages

### 404 Errors on Routes

If routes like `/product/govern` return 404:
1. Ensure the `404.html` file is being created during build
2. Verify the `build:pages` script includes the copy command
3. Check that GitHub Pages Source is set to "Deploy from a branch" and pointing to `gh-pages`

### Assets Not Loading

If CSS, JS, or images don't load:
1. Check browser console for errors
2. Verify the `base` path in `vite.config.ts` matches your repository name (`/nexus-landing-page/`)
3. Ensure all assets are in the `client/public` directory or imported correctly
4. Rebuild and redeploy after any configuration changes
