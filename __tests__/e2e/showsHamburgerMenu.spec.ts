import { test, expect } from '@playwright/test';

test('shows hamburger menu', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId("hamburger-icon").click();

  await expect(page.getByTestId('hamburger-menu')).toBeVisible();
});
