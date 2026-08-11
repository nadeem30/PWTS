import {test, expect} from '@playwright/test';

test('Check Locators', async({page})=>{

// await page.goto('https://practicetestautomation.com/practice-test-login/');
// await page.getByRole('button', {name: 'Submit'}).click();
// await page.getByText('CONTACT').click();



await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.getByRole('button', {name: 'Login'}).click();
await page.waitForTimeout(5000);


await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');
await page.getByTitle('Hello, have a question? Let’s chat.').click();

// await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
// await page.getByAltText('logo image').isVisible();


await page.waitForTimeout(7000);

})  