import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to home page', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page loaded
    await expect(page).toHaveTitle(/Nexus/i);
    
    // Check for main content
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('should navigate between all main pages', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to Solutions
    await page.click('text=/Solutions/i');
    await expect(page).toHaveURL(/\/solutions/);
    
    // Test navigation to Enterprise
    await page.click('text=/Enterprise/i');
    await expect(page).toHaveURL(/\/enterprise/);
    
    // Test navigation to Pricing
    await page.click('text=/Pricing/i');
    await expect(page).toHaveURL(/\/pricing/);
  });

  test('should navigate to product pages', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to Govern
    const governLink = page.locator('a[href*="/product/govern"]').first();
    if (await governLink.isVisible()) {
      await governLink.click();
      await expect(page).toHaveURL(/\/product\/govern/);
    }
  });

  test('should navigate to company pages', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to About
    const aboutLink = page.locator('a[href*="/company/about"]').first();
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await expect(page).toHaveURL(/\/company\/about/);
    }
  });

  test('should handle 404 for non-existent routes', async ({ page }) => {
    await page.goto('/this-page-does-not-exist');
    
    // Should show 404 page
    const content = await page.textContent('body');
    expect(content).toMatch(/404|not found/i);
  });
});
