import {test, expect} from '@playwright/test';

test('screenshot test', async ({page})=>{

  await page.goto('https://www.cricinfo.com/');
  await page.waitForTimeout(7000);
  page.on('dialog', async dialog=>{
  console.log(await dialog.message());  
  await dialog.accept();
  })

// await page.getByText('Accept All').click();

const acceptBtn = page.getByText('Accept All', { exact: false });
if (await acceptBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
  await acceptBtn.click();
}
const image = page.locator(
  'img[src="https://wassets.hscicdn.com/static/images/v2/logo.svg"]'
);
await image.screenshot({path: 'cricinfo.png'});



})