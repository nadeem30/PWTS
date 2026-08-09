import {test, expect} from '@playwright/test';

test('Validate Page Title', async({page})=>{

await page.goto('https://demoblaze.com/index.html');

await expect (page).toHaveTitle('STORE');



})