// await page.goto('   / @letslearnqa');  

//    await page.getByPlaceholder('Search').fill('playwright');
//    await page.waitForSelector('.ytSuggestionComponentLeftContainer');
//    //await expect(page.locator('.ytSuggestionComponentLeftContainer')).toHaveCountGreaterThan(0);
   
//    const allSuggestions = await page.locator('.ytSuggestionComponentLeftContainer');
//    //allSuggestions is a Locator object, not an array
   
//    const count = await allSuggestions.count();
  
//    for (let i = 0; i lessthan count; i++) 
//    {
//     const text = await allSuggestions.nth(i).textContent();
//     console.log(text);
//     expect(text).toContain('playwright');
//    }


import {test, expect}  from  '@playwright/test';
test('AutoSuggestion Test', async ({page})=>{

await page.goto('https://www.youtube.com/@RajaVlogs726');
await page.waitForTimeout(5000);
await page.getByPlaceholder('Search').fill('Paneer');

await page.waitForSelector('.ytSuggestionComponentLeftContainer');
const AutoSugg=await page.locator('[class=ytSuggestionComponentLeftContainer]');
const count=await AutoSugg.count();
console.log(count);

for(let i=0;i<count;i++){
    const text= await AutoSugg.nth(i).textContent();
    console.log(text);
}





})
