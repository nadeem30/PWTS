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