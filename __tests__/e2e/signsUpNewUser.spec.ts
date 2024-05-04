import { test, expect } from '@playwright/test';

test('signs up new user', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('desktop-account').click()

  await page.getByRole('button', { name: 'SIGN UP' }).click()

  await page.getByLabel('Email').fill('zewoler@gmail.com')
  await page.getByLabel('Password').fill('hihihi')

  await page.getByTestId('account-submit').click()
})
