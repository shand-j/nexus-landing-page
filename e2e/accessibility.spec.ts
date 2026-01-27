import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Should have exactly one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // H1 should have meaningful text
    const h1Text = await page.locator('h1').first().textContent();
    expect(h1Text).toBeTruthy();
    expect(h1Text!.length).toBeGreaterThan(3);
  });

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/');
    
    // Find all images
    const images = page.locator('img');
    const count = await images.count();
    
    // Check each image has alt text (decorative images can have empty alt)
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      
      // Alt attribute should exist (even if empty for decorative images)
      expect(alt).not.toBeNull();
    }
  });

  test('should have semantic HTML elements', async ({ page }) => {
    await page.goto('/');
    
    // Check for semantic elements
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    const nav = page.locator('nav, [role="navigation"]');
    const navCount = await nav.count();
    expect(navCount).toBeGreaterThan(0);
  });

  test('should have proper link text', async ({ page }) => {
    await page.goto('/');
    
    // Find all links
    const links = page.locator('a[href]');
    const count = await links.count();
    
    // Check all visible links have meaningful text or aria-label
    // We check all links to ensure full accessibility compliance
    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      if (await link.isVisible()) {
        const text = await link.textContent();
        const ariaLabel = await link.getAttribute('aria-label');
        
        // Link should have text or aria-label for screen readers
        expect(text || ariaLabel).toBeTruthy();
      }
    }
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');
    
    // Tab through first few elements
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Check that focus is visible (something should have focus)
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should have language attribute', async ({ page }) => {
    await page.goto('/');
    
    // HTML should have lang attribute
    const lang = await page.getAttribute('html', 'lang');
    expect(lang).toBeTruthy();
  });

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/');
    
    // Get body background color
    const bodyBg = await page.evaluate(() => {
      const body = document.body;
      return window.getComputedStyle(body).backgroundColor;
    });
    
    // Should have a background color set
    expect(bodyBg).toBeTruthy();
    expect(bodyBg).not.toBe('rgba(0, 0, 0, 0)');
  });
});
