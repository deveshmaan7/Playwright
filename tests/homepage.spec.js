const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://luxury.tatacliq.com/explore/kids-clp');
//   await expect(page).toHaveTitle("kids clp")
// });


// test('test', async ({ page }) => {
//   await page.goto('https://luxury.tatacliq.com/');
//   await page.locator('.headerRightList > li:nth-child(2) > a').click();
//   await page.getByPlaceholder('Mobile number').click();
//   await page.getByPlaceholder('Mobile number').fill('999 919 9425');
// });

// test('test', async ({ page }) => {
//   await page.goto('https://www.myntra.com/');
//   await page.locator('div').filter({ hasText: /^Profile$/ }).locator('span').first().click();
//   await page.getByRole('link', { name: 'login / Signup' }).click();
//   await page.locator('input[type="tel"]').click();
//   await page.locator('input[type="tel"]').fill('9999199425');
//   await page.getByText('CONTINUE').click();
// });

test('test', async ({ page }) => {
  await page.goto('https://www.tatacliq.com/');
  await page.pause()

  await page.locator('[data-test="button-main-div"]').click();
  await page.getByPlaceholder('Enter Mobile Number').click();
  await page.getByPlaceholder('Enter Mobile Number').fill('9999199425');
  await page.getByRole('button', { name: 'Continue' }).click();
});

// MYNTRA LOGIN

// test('test', async ({ page }) => {

// await page.goto('https://www.myntra.com/login');
// await page.locator('input[type="tel"]').click();
// await page.locator('input[type="tel"]').fill('9999199425');
// await page.getByText('CONTINUE').click();
// });