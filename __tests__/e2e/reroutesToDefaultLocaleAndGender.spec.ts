import { test, expect } from '@playwright/test';

test('should reroute to /en/women', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveURL('http://127.0.0.1:3000/en/women')
})
