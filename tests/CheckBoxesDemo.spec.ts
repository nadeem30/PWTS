// 10 - Playwright With TypeScript - How to handle Checkboxes
// check()
// await page.locator('#checkbox1').check();

// uncheck()
// await page.locator('#checkbox1').uncheck();

// isChecked()
// await page.locator('#checkbox1').isChecked();

// isEnabled()
// await page.locator('#checkbox1').isEnabled();

// assertion - means checkbox is expected to be in checked state and not checked state
// await expect(page.locator('#checkbox1')).toBeChecked();
// await expect(checkbox).not.toBeChecked();

// Handle Multiple Checkboxes
// const checkboxes = page.locator('input[type="checkbox"]');
// await checkboxes.nth(i).check();

import {test, expect} from '@playwright/test';
test('checkbox test', async ({page})=>{

    await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');
    await page.waitForTimeout(3000);

    const allCheckboxes=page.locator('[type=checkbox]'); 
    await allCheckboxes.first().check();
    await page.waitForTimeout(2000);
    await allCheckboxes.first().uncheck();

    console.log('1st Checkbox Checked:',await allCheckboxes.first().isChecked());
    console.log('5th Checkbox Enabled:',await allCheckboxes.nth(4).isEnabled());

    //await expect(allCheckboxes.first()).toBeChecked();
    await expect(allCheckboxes.first()).not.toBeChecked();
     



})