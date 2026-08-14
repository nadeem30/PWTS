// 09 - Playwright With TypeScript - How to handle iFrame in Playwright
// What is iFrame - HTML document inside another HTML document.
// Here we have to switch/enter in to iFrame if we want to interact with element inside iFrame.

// Using frameLocator()

// const testframe = await page.frameLocator('.demo-frame')
// testframe.locator('id=tags').fill('java');

// Handling nested iFrames
// const parentFrame = page.frameLocator('#parent-frame');
// const childFrame = parentFrame.frameLocator('#child-frame');
// await childFrame.locator('button').click();


import {test, expect} from '@playwright/test';
test('iframe test', async ({page})=>{

await page.goto('https://demoqa.com/nestedframes');
await page.waitForTimeout(3000);

const frame1=await page.frameLocator('id=frame1');
await frame1.frameLocator('srcdoc=<p>Child Iframe</p>');






})