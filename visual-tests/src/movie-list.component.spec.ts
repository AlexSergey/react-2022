import { test, expect } from '@playwright/test';

test('example', async ({ page }) => {
  await page.goto(
    'http://localhost:6006/iframe.html?args=&id=components-movielistcomponent--movie-list&viewMode=story',
  );

  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
});
