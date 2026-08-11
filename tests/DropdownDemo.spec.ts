import {test, expect} from 'playwright/test';

test('Dropdown Test', async({page})=>{


await page.goto('https://practice.expandtesting.com/dropdown');
await page.waitForTimeout(5000);


//Select by label (visible text)
await page.locator('[id= dropdown]').selectOption({label: 'Option 2'});
await page.waitForTimeout(2000);

//Select by Index
await page.locator('[class= form-control]').selectOption({index: 2});
await page.waitForTimeout(2000);

//Select by Value
await page.locator('[name=country]').selectOption({value: 'MA'});
await page.waitForTimeout(2000);





})