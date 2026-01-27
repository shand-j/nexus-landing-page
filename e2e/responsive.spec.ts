import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    test.describe(`${viewport.name} (${viewport.width}x${viewport.height})`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
      });

      test('should load home page correctly', async ({ page }) => {
        await page.goto('/');
        
        // Page should be visible
        const main = page.locator('main');
        await expect(main).toBeVisible();
        
        // Content should be visible (not overflowing or hidden)
        const h1 = page.locator('h1').first();
        await expect(h1).toBeVisible();
      });

      test('should have accessible navigation', async ({ page }) => {
        await page.goto('/');
        
        // Navigation should be present (might be in hamburger menu on mobile)
        const nav = page.locator('nav, [role="navigation"]').first();
        await expect(nav).toBeVisible();
      });

      test('should not have horizontal scroll', async ({ page }) => {
        await page.goto('/');
        
        // Check that body doesn't overflow horizontally
        const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
        const viewportWidth = viewport.width;
        
        // Allow small tolerance for scrollbars and sub-pixel rendering (typically 15-17px for scrollbar)
        const scrollbarTolerance = 17;
        expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + scrollbarTolerance);
      });

      test('should display images responsively', async ({ page }) => {
        await page.goto('/');
        
        // Find all images
        const images = page.locator('img');
        const count = await images.count();
        
        // Check each visible image doesn't exceed viewport width
        for (let i = 0; i < count; i++) {
          const img = images.nth(i);
          if (await img.isVisible()) {
            const box = await img.boundingBox();
            if (box) {
              expect(box.width).toBeLessThanOrEqual(viewport.width);
            }
          }
        }
      });
    });
  }
});
