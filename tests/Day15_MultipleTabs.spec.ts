/*Playwright uses a three-tier structure to manage your automation session:

Browser: 
This is the physical instance of the browser (Chromium, Firefox, or WebKit). 

BrowserContext: 
This is an isolated "incognito-like" session within the Browser. 
It has its own cookies, local storage, and permissions. 

Page: This is a single tab or window within a BrowserContext

Sample Script along with explanation
----------------------------------------------------------------
await page.goto('https://opensource-demo.orangehrmlive...)

const pagepromise = context.waitForEvent('page');

It means script is expecting a new page being created.
If we clicked first and then started waiting, the tab might open so fast that Playwright misses the event.
By defining the promise first, we are ready to catch the event timely.
    
await page.getByRole('link', {name: "OrangeHRM, Inc"}).click();

const newpage = await pagepromise;
Now we await that promise we created
Once the click finishes and the browser opens the tab, pagePromise resolves, and we assign that new tab to the variable newPage. You now have two distinct objects: page (the old tab) and newPage (the new tab).

console.log(await newpage.title());
await page.bringToFront(); //move to the original old tab
    
console.log(await page.title());
await page.waitForTimeout(5000);
 */


import { test, expect } from '@playwright/test';

test('Multi Tabs', async ({ page, context }) => {
    // Navigate to the base URL
    await page.goto('https://www.instagram.com/?hl=en');
    console.log('Original Tab Title:', await page.title());

    // Step 1: Set a "listener" to watch for a new tab opening.
    // We do NOT use 'await' here yet because the tab hasn't opened.
    const pagepromise = context.waitForEvent('page');

    // Step 2: Click the link that causes a new tab to open.
    await page.getByText('Jobs').click(); 

    // Step 3: Now wait for the new tab to actually open and save it into 'newpage'.
    const newpage = await pagepromise;

    // Step 4: Wait for the new page to finish loading all its content in the background.
    // Without this, it prints the title before the page finishes loading.
    await newpage.waitForLoadState('networkidle');

    // Print the title of the fully loaded new tab
    console.log('New Tab Title:', await newpage.title());

    // 5. Bring the original tab back to the front of the browser window.
    await page.bringToFront();
    console.log('Back to Parent Tab Title:', await page.title());

    // Optional pause to visually observe tab switching before test teardown
    await page.waitForTimeout(3000);
});