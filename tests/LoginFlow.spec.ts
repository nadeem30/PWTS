import {test, expect} from '@playwright/test';

test('Login Flow', async({page})=>{

//Login
await page.goto('https://practicetestautomation.com/practice-test-login/');

await expect(page).toHaveTitle('Test Login | Practice Test Automation');

await page.waitForTimeout(5000);

await page.getByLabel('username').fill('student');
await page.getByLabel('password').fill('Password123');
await page.getByRole('button', {name: 'Submit'}).click();

await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
await page.waitForTimeout(3000);


//Logout
await page.getByRole('link', {name: 'Log out'}).click();
await expect(page).toHaveTitle('Test Login | Practice Test Automation');
await page.waitForTimeout(3000);




})
