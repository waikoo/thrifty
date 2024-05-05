import { test, expect } from '@playwright/test';

test('should change gender', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: /^MEN$/ }).click()

  await expect(page).toHaveURL('http://127.0.0.1:3000/en/men')
})
