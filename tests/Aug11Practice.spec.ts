import {test, expect} from '@playwright/test';

test('dropdown practice', async({page})=>{

await page.goto('https://demoqa.com/automation-practice-form');
await page.waitForTimeout(5000);

await page.getByPlaceholder('First Name').fill('Saim');
await page.getByPlaceholder('Last Name').fill('Ayub');
await page.getByPlaceholder('name@example.com').fill('saimayub001@gmail.com');
await page.locator('[id=gender-radio-1]').click();
await page.locator('[id=userNumber]').fill('7656742456');
await page.locator('[id=subjectsInput]').fill('Maths');
await page.locator('[id=subjectsInput]').press('Enter');

await page.locator('#hobbies-checkbox-2').click();

await page.getByPlaceholder('Current Address').fill('Ghatotand, Ramgarh');
await page.waitForTimeout(5000);


await page.getByRole('button', {name: 'Submit'}).click();
await page.waitForTimeout(2000);

 // Take screenshot and attach it to Playwright report
  await test.info().attach('Submission Screenshot', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });

await page.waitForTimeout(2000);




})