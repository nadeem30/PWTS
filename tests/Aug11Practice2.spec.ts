import {test, expect} from '@playwright/test';
import {faker} from '@faker-js/faker';

test('Register and Login with Faker data', async ({ page }) => {


    // Generate random test data
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({firstName,lastName});
  // Generate gender
  const gender = faker.person.sex();

  const password = 'Test@12345';
  //const address = faker.location.streetAddress();
//   const city = faker.location.city();
//   const state = faker.location.state();
  const phone = faker.string.numeric(10);

  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Email:', email);
  console.log('Gender:', gender);
  //console.log('Address:', address);
//   console.log('City:', city);
//   console.log('State:', state);
  console.log('Phone:', phone);



    await page.goto('https://rahulshettyacademy.com/client/#/auth/register');
    await page.waitForTimeout(3000);

    await page.getByPlaceholder('First Name').fill(firstName);
    await page.getByPlaceholder('Last Name').fill(lastName);
    await page.getByPlaceholder('email@example.com').fill(email);
    await page.getByPlaceholder('enter your number').fill(phone);
    await page.locator('[formcontrolname=occupation]').selectOption({value: '3: Engineer'});

    if(gender === 'male'){
        await page.locator('[value=Male]').click();
    }
    else{
        await page.locator('[value=Female]').click();
    }

    await page.locator('[formcontrolname=userPassword]').fill(password);
    await page.locator('[formcontrolname=confirmPassword]').fill(password);

    await page.locator('[formcontrolname=required]').click();
    await page.waitForTimeout(3000);

    await page.locator('#login').click();
    await page.waitForTimeout(3000);
    

    await expect(page.getByText('Account Created Successfully')).toBeVisible();
     await page.waitForTimeout(2000);

    await page.getByText('Login').click();
     await page.waitForTimeout(2000);

    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill(password);
     await page.waitForTimeout(2000);
    await page.locator('#login').click();
     await page.waitForTimeout(2000);

    await expect(page.getByText(' Sign Out ')).toBeVisible();













})