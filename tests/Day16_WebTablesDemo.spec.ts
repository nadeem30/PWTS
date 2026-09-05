import {test, expect} from '@playwright/test';
test('Handling Web Tables', async({page})=>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php');
    await page.waitForTimeout(4000);

    const columnCount=await page.locator('thead tr th').count();
    console.log('Column Count: '+columnCount);

    await expect(columnCount).toBe(7);

    const rowCount=await page.locator('tbody tr').count();
    console.log('Row Count: '+rowCount);

    await expect(rowCount).toBe(5);

    // 0-indexed: row 2 is the 3rd row, cell 2 is the 3rd cell

    const cell = page.locator('table tbody tr').nth(2).locator('td').nth(3);
    console.log(await cell.textContent());
    for(let h=0;h<rowCount;h++){
    for(let i=0;i<columnCount;i++){
    const rowData= await page.locator('table tbody tr').nth(h).locator('td').nth(i);
    console.log('Row '+ (h+1) +' Column '+ (i+1) +' data: '+await rowData.textContent());
}}









})