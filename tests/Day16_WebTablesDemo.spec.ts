/*# HTML Table Structure in Playwright

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>John</td>
            <td>30</td>
        </tr>
    </tbody>
</table>
```

### Structure

```text
<table>  → Complete table
 ├── <thead> → Header
 │    └── <tr> → Header row
 │         └── <th> → Header cell
 │
 └── <tbody> → Data
      └── <tr> → Data row
           └── <td> → Data cell
```

### Playwright

// Count columns
const columnCount = await page.locator('table thead th').count();

// Count rows
const rowCount = await page.locator('table tbody tr').count();

// Get all headers
const headers = await page.locator('table thead th').allInnerTexts();

// Get first row data
const row = await page.locator('table tbody tr').nth(0).locator('td').allInnerTexts();

// Find row by text
const johnRow = page.locator('table tbody tr').filter({ hasText: 'John' });
```

### Important Locators

table                 // Complete table
table thead th        // Headers
table tbody tr        // Rows
table tbody tr td     // Cells
```

**Remember:** `tr = row`, `th = header`, `td = data cell`.
*/

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