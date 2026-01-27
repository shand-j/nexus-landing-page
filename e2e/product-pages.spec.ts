import { test, expect } from '@playwright/test';

const productPages = [
  { path: '/product/govern', name: 'Govern' },
  { path: '/product/guide', name: 'Guide' },
  { path: '/product/validate', name: 'Validate' },
  { path: '/product/measure', name: 'Measure' },
];

test.describe('Product Pages', () => {
  for (const product of productPages) {
    test.describe(product.name, () => {
      test(`should load ${product.name} page`, async ({ page }) => {
        await page.goto(product.path);
        
        // Check that page loaded
        const main = page.locator('main');
        await expect(main).toBeVisible();
        
        // Check for product name in content
        const content = await page.textContent('body');
        expect(content).toMatch(new RegExp(product.name, 'i'));
      });

      test(`should have proper page structure on ${product.name}`, async ({ page }) => {
        await page.goto(product.path);
        
        // Should have a heading
        const h1 = page.locator('h1').first();
        await expect(h1).toBeVisible();
        
        // Should have some descriptive content
        const paragraphs = page.locator('p');
        const count = await paragraphs.count();
        expect(count).toBeGreaterThan(0);
      });

      test(`should be able to navigate back from ${product.name}`, async ({ page }) => {
        await page.goto(product.path);
        
        // Navigate back to home
        const homeLink = page.locator('a[href="/"]').first();
        if (await homeLink.isVisible()) {
          await homeLink.click();
          await expect(page).toHaveURL('/');
        }
      });
    });
  }
});
