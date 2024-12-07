import { test, expect } from '@playwright/test';

test('IDS login page', async ({ page }) => {
  await page.goto('https://qa-directsale.beforeyoubuy.com.au/login');

});
