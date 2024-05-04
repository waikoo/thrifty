import { test, expect } from '@playwright/test';

test('logs in', async ({ page }) => {
  await page.goto('/');

  await page.getByTitle('Sign in').click()

  await page.getByLabel('Email').fill('zewoler@gmail.com')
  await page.getByLabel('Password').fill('hihihi')

  await page.getByTestId('account-submit').click()
})
