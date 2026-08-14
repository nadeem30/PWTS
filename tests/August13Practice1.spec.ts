import {test, expect} from '@playwright/test';

test('screenshot test', async ({page})=>{

  await page.goto('https://www.cricinfo.com/series/caribbean-premier-league-2026-1534175/jamaica-kingsmen-vs-guyana-amazon-warriors-6th-match-1534184/match-report');

//   page.on('dialog', async dialog=>{
//   console.log(await dialog.message());  
//   await dialog.accept();
//   })

await page.getByText('Accept All').click();
const ele=page.getByAltText('Mohammad Nabi finished with four wickets, Jamaica Kingsmen vs Guyana Amazon Warriors, CPL 2026, Kington, August 13, 2026');
await ele.screenshot({path: 'nabi.png'});



})