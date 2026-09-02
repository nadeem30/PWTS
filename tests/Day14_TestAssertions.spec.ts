// Assertions are used to validate expected outcomes in your tests.
// Playwright uses built-in assertion support via the expect API.

// You can use assertions after importing 'expect' from @playwright/test:
// import{test, expect} from '@playwright/test'

// Assertion                                                        What it checks
// await expect(locator).toBeVisible()                Element is visible on the page
// await expect(locator).toBeEnabled()         Element is not disabled
// await expect(locator).toHaveText('Submit') Element contains exact text
// await expect(locator).toContainText('Sub') Element contains partial text
// await expect(locator).toHaveValue('Value') Input field has a specific value
// await expect(page).toHaveURL(/checkout/) URL matches a string
// await expect(page).toHaveTitle(/Dashboard/) Page title matches

// Soft Assertions
// -----------------
// By default, if an assertion fails, the entire test stops. 
// Soft assertions allow the test to keep running and report all failures at the end.
// This is great for checking multiple independent UI elements.
// await expect.soft(page.getByText('Welcome')).toBeVisible();

import {test, expect} from '@playwright/test';

test('Test Assertions', async ({page})=>{
await page.goto('https://practicetestautomation.com/practice-test-login/');

const username=await page.getByLabel('username');
await expect(username).toBeVisible();
await expect(username).toBeEnabled();

await expect(page.locator('h2')).toHaveText('Test login');
await expect(page.locator('h2')).toContainText('login');

await username.fill('student');
await page.getByLabel('password').fill('Password123');
await page.getByRole('button',{name:'Submit'}).click();

await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');




})