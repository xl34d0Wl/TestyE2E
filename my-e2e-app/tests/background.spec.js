import { test, expect } from '@playwright/test';

test('strona główna ma poprawnie załadowane tło', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');

  const bg = await page.locator('html').evaluate(el =>
    window.getComputedStyle(el).getPropertyValue('background-image')
  );
  expect(bg).toContain('background.jpg');

  await expect(page).toHaveScreenshot('home-bg.png');
});
