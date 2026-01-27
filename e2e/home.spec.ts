import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero section', async ({ page }) => {
    // Look for main heading
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();
    
    // Hero should have some text content
    const headingText = await heroHeading.textContent();
    expect(headingText).toBeTruthy();
    expect(headingText!.length).toBeGreaterThan(0);
  });

  test('should have CTA buttons', async ({ page }) => {
    // Look for call-to-action buttons
    const buttons = page.locator('button, a[role="button"]');
    const count = await buttons.count();
    
    // Should have at least one button
    expect(count).toBeGreaterThan(0);
  });

  test('should display all four product pillars', async ({ page }) => {
    // Look for the four core features: Govern, Guide, Validate, Measure
    const content = await page.textContent('body');
    
    expect(content).toMatch(/govern/i);
    expect(content).toMatch(/guide/i);
    expect(content).toMatch(/validate/i);
    expect(content).toMatch(/measure/i);
  });

  test('should have links to product pages', async ({ page }) => {
    // Check for product page links
    const governLink = page.locator('a[href*="/product/govern"]');
    const guideLink = page.locator('a[href*="/product/guide"]');
    const validateLink = page.locator('a[href*="/product/validate"]');
    const measureLink = page.locator('a[href*="/product/measure"]');
    
    await expect(governLink.first()).toBeVisible();
    await expect(guideLink.first()).toBeVisible();
    await expect(validateLink.first()).toBeVisible();
    await expect(measureLink.first()).toBeVisible();
  });
});
