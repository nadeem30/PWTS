// 08 - Playwright With TypeScript - How to take screenshot
// ===================================================================

// In Playwright, taking screenshots is very simple and powerful.
// use .screenshot() method

// You can capture:

// The viewport(visible part of the page)
// await page.screenshot({ path: 'viewport.png'});

// The entire page
// await page.screenshot({ path: 'fullpage.png', fullPage: true });

// A specific element
// const ele = await page.locator("//h1")
// await ele.screenshot({path: 'ele.png'})


import {test, expect} from '@playwright/test';

test('Screenshot', async ({page})=>{

await page.goto('https://www.hackerrank.com/home');
await page.waitForTimeout(5000);

//viewport
//await page.screenshot({path: 'C:/Playwright/PWTS/screenshots/HKviewport.png'});

//fullpage
await page.screenshot({path: 'HKfullpage.png', fullPage:true});

//Element Screenshot
// const ele= await page.getByAltText('HackerRank logo with the wordmark "HackerRank" and a green rectangle after "Rank"');
// await ele.screenshot({path: HKelement.png'});

})