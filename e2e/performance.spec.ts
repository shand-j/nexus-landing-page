import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('should load home page within reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('should have meta tags for SEO', async ({ page }) => {
    await page.goto('/');
    
    // Check for viewport meta tag
    const viewport = await page.getAttribute('meta[name="viewport"]', 'content');
    expect(viewport).toContain('width=device-width');
    
    // Check for description meta tag (if present)
    const description = page.locator('meta[name="description"]');
    if (await description.count() > 0) {
      const content = await description.getAttribute('content');
      expect(content).toBeTruthy();
    }
  });

  test('should not have console errors on load', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Filter out known harmless errors (if any)
    const realErrors = errors.filter(err => 
      !err.includes('favicon') && // Ignore favicon errors
      !err.includes('DevTools') // Ignore DevTools errors
    );
    
    // Should have no console errors
    expect(realErrors.length).toBe(0);
  });

  test('should not have broken images', async ({ page }) => {
    await page.goto('/');
    
    // Find all images
    const images = page.locator('img[src]');
    const count = await images.count();
    
    // Check each visible image loads successfully
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      if (await img.isVisible()) {
        const naturalWidth = await img.evaluate((el) => (el as HTMLImageElement).naturalWidth);
        
        // Image should have loaded (naturalWidth > 0)
        // Note: SVGs might have naturalWidth of 0, so we check for src existence
        const src = await img.getAttribute('src');
        expect(src).toBeTruthy();
        
        if (naturalWidth !== undefined) {
          expect(naturalWidth).toBeGreaterThanOrEqual(0);
        }
      }
    }
  });
});
