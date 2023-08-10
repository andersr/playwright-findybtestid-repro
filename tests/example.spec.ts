import { test } from '@playwright/test';

test('get by test id', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByTestId('foo');
});
