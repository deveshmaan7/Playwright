const { test, expect } = require('@playwright/test');

test('selctors demo', async ({ page }) => {
  await page.goto('https://www.myntra.com/login');
  await page.pause()

  // using any object property

await page.locator('input[type="tel"]').click();
await page.locator('input[type="tel"]').fill('9999199425');
// await page.getByText('CONTINUE').click();

// using XPATH

// await page.getByText('CONTINUE').click();

await page.locator('xpath=//*[@id="reactPageContent"]/div/div/div[2]/div[2]/div[3]').click();
 



});