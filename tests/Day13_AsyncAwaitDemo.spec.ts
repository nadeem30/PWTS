/*1. What is a Promise in Playwright?
====================================
A Promise represents a value that will be available in the future.

In automation:
Opening a url in browser takes time
Clicking a button takes time
Getting text from an element takes time
Calling an API takes time

So Playwright functions return a Promise because they don’t complete instantly.

Example:
page.goto('https://bstackdemo.com/')

This does NOT immediately load the page.
So page.goto() returns a Promise.

2. What is await?
===================
await tells:
"Wait here until this Promise is completed before moving to next line."
 Without await, playwright will continue executing next lines immediately.

3. What is async?
==================
async is used to declare that a function will handle Promises.
If a function uses await, it must be marked as async.
This means: This function will use asynchronous operations.*/

import {test,expect} from '@playwright/test';
test('AsyncAwait Deno', async({page})=>{

await page.goto('https://bstackdemo.com/');
await expect(page).toHaveTitle('StackDemo');
await page.locator('[id=signin]').click();
await page.waitForTimeout(5000);



    
})