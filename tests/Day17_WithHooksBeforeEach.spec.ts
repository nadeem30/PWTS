import {test,expect} from '@playwright/test';
test.beforeEach(async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
})

test.afterEach(async({page})=>{
await page.locator('#react-burger-menu-btn').click();
await page.locator('#logout_sidebar_link').click();
})

test('Validate login',async({page})=>{
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

test('Add to cart',async({page})=>{
await page.locator('[id=add-to-cart-sauce-labs-backpack]').click();
await expect(page.locator('.shopping_cart_link')).toBeVisible();
})