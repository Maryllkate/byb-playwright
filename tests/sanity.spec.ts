import { test } from '@playwright/test';

test('IDS access page', async ({ page }) => {
  await page.goto('https://qa-directsale.beforeyoubuy.com.au/login');
});
