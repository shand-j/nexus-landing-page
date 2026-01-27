# Testing Guide for Nexus Landing Page

This document describes how to run and write tests for the Nexus landing page.

## Overview

We use **Playwright** for end-to-end (E2E) testing. Playwright allows us to test the application across multiple browsers (Chromium, Firefox, WebKit) and devices (desktop, mobile).

## Prerequisites

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Install Playwright browsers** (first time only):
   ```bash
   pnpm playwright install
   ```

## Running Tests

### Run All Tests

```bash
pnpm test
```

This runs all tests in headless mode across all configured browsers.

### Interactive UI Mode

```bash
pnpm test:ui
```

Opens the Playwright UI where you can:
- See all tests
- Run individual tests
- Debug tests with time-travel
- See screenshots and traces

### Headed Mode

```bash
pnpm test:headed
```

Runs tests with visible browser windows (useful for debugging).

### Browser-Specific Tests

```bash
# Test only in Chromium
pnpm test:chromium

# Test only in Firefox
pnpm test:firefox

# Test only in WebKit (Safari)
pnpm test:webkit

# Test mobile viewports
pnpm test:mobile
```

### Debug Mode

```bash
pnpm test:debug
```

Opens the Playwright Inspector for step-by-step debugging.

### View Test Report

```bash
pnpm test:report
```

Opens the HTML report from the last test run.

## Test Structure

Tests are located in the `e2e/` directory:

```
e2e/
├── navigation.spec.ts      # Navigation and routing tests
├── home.spec.ts            # Home page specific tests
├── product-pages.spec.ts   # Product feature pages tests
├── responsive.spec.ts      # Responsive design tests
├── accessibility.spec.ts   # Accessibility tests
├── performance.spec.ts     # Performance and SEO tests
```

## Test Coverage

### 1. Navigation Tests (`navigation.spec.ts`)

- Home page loads correctly
- Navigation between main pages (Solutions, Enterprise, Pricing)
- Product page navigation (Govern, Guide, Validate, Measure)
- Company page navigation (About, Careers, Contact, Blog)
- 404 handling for non-existent routes

### 2. Home Page Tests (`home.spec.ts`)

- Hero section visibility
- Call-to-action buttons present
- Four product pillars displayed (Govern, Guide, Validate, Measure)
- Links to product pages

### 3. Product Pages Tests (`product-pages.spec.ts`)

For each product page (Govern, Guide, Validate, Measure):
- Page loads successfully
- Proper page structure (headings, content)
- Navigation back to home works

### 4. Responsive Design Tests (`responsive.spec.ts`)

Tests across three viewports:
- Mobile (375×667)
- Tablet (768×1024)
- Desktop (1920×1080)

For each viewport:
- Page loads correctly
- Navigation is accessible
- No horizontal scroll
- Images are responsive

### 5. Accessibility Tests (`accessibility.spec.ts`)

- Proper heading hierarchy (single h1, meaningful text)
- Alt text for images
- Semantic HTML elements (main, nav)
- Meaningful link text
- Keyboard navigation works
- Language attribute on HTML
- Color contrast

### 6. Performance Tests (`performance.spec.ts`)

- Page load time under 5 seconds
- SEO meta tags present
- No console errors
- No broken images

## Writing New Tests

### Basic Test Structure

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    // Navigate to a page
    await page.goto('/');
    
    // Interact with elements
    await page.click('button');
    
    // Make assertions
    await expect(page.locator('h1')).toBeVisible();
  });
});
```

### Common Patterns

#### Navigating to a Page

```typescript
await page.goto('/product/govern');
```

#### Checking Element Visibility

```typescript
const element = page.locator('h1');
await expect(element).toBeVisible();
```

#### Clicking Elements

```typescript
await page.click('button');
// or
await page.locator('button').click();
```

#### Checking Text Content

```typescript
const text = await page.textContent('h1');
expect(text).toContain('Nexus');
```

#### Checking URL

```typescript
await expect(page).toHaveURL(/\/product\/govern/);
```

#### Waiting for Elements

```typescript
await page.waitForSelector('h1');
// or
await page.locator('h1').waitFor();
```

### Best Practices

1. **Use Locators**: Prefer Playwright's built-in locators over CSS selectors
   ```typescript
   // Good
   page.getByRole('button', { name: 'Submit' })
   page.getByLabel('Email')
   
   // Less ideal but sometimes necessary
   page.locator('button')
   ```

2. **Wait for State**: Ensure elements are ready before interacting
   ```typescript
   await page.waitForLoadState('networkidle');
   ```

3. **Use beforeEach**: Set up common state for related tests
   ```typescript
   test.describe('Product Pages', () => {
     test.beforeEach(async ({ page }) => {
       await page.goto('/product/govern');
     });
     
     test('test 1', async ({ page }) => { /* ... */ });
     test('test 2', async ({ page }) => { /* ... */ });
   });
   ```

4. **Descriptive Test Names**: Make it clear what's being tested
   ```typescript
   // Good
   test('should display error message when form is submitted without email', ...)
   
   // Bad
   test('form validation', ...)
   ```

5. **Independent Tests**: Each test should be able to run independently
   - Don't rely on other tests' state
   - Clean up after your test if needed

## Continuous Integration

Tests automatically run in CI when:
- A pull request is created
- Code is pushed to a PR branch
- Code is merged to main

In CI, tests run:
- Only on Chromium (for speed)
- In headless mode
- With 2 retries for flaky tests
- With HTML and GitHub reporters

## Debugging Failed Tests

1. **Check the HTML Report**:
   ```bash
   pnpm test:report
   ```
   Shows screenshots, traces, and logs for failed tests.

2. **Run in UI Mode**:
   ```bash
   pnpm test:ui
   ```
   Allows you to see what the test sees and step through it.

3. **Run in Headed Mode**:
   ```bash
   pnpm test:headed
   ```
   Watch the browser execute the test.

4. **Use Debug Mode**:
   ```bash
   pnpm test:debug
   ```
   Pause at each step and inspect the page state.

5. **Add Console Logs**:
   ```typescript
   test('my test', async ({ page }) => {
     console.log('Navigating...');
     await page.goto('/');
     
     const text = await page.textContent('h1');
     console.log('H1 text:', text);
   });
   ```

## Common Issues

### Browser Download Blocked

If you see errors about blocked downloads:
```bash
# This happens in restricted environments
# Tests can still be written and reviewed, but need a different environment to run
```

### Port Already in Use

If port 3000 is busy:
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or change the port in playwright.config.ts
```

### Flaky Tests

If tests pass locally but fail in CI:
- Add explicit waits: `await page.waitForSelector(...)`
- Increase timeouts: `test.setTimeout(60000)`
- Check for race conditions
- Use Playwright's auto-waiting features

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Locators Guide](https://playwright.dev/docs/locators)
- [Assertions](https://playwright.dev/docs/test-assertions)
