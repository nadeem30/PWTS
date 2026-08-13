/*Types of JS Alerts
------------------

In web applications, you typically encounter:
        alert() → simple message with OK
        confirm() → OK / Cancel
        prompt() → input field + OK / Cancel

Alerts are treated as browser dialogs,
and Playwright provides a dedicated 'dialog' event to manage them.

Playwright listens for dialogs using following listener.

page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
});

page → represents the browser tab
.on() → used to listen to events
'dialog' → event fired when a JS alert appears

So this line means:
“Whenever any JavaScript dialog (alert/confirm/prompt) appears on this page, run this function.”

How It Works
===========
--When a page triggers a JavaScript dialog, like: alert(), confirm() or prompt()
--Playwright emits a dialog event
--Then listner is automatically invoked with a dialog object containing methods and properties to interact with the dialog.

Method / Property      Description
=================      ===========
dialog.message()       Gets the message shown in the alert/prompt/confirm
dialog.accept()        Accepts the dialog (OK button);
dialog.dismiss()       Cancels the dialog (Cancel button)
dialog.accept('text')  Accepts with text in prompt box
dialog.type()          Returns alert, confirm, or prompt */

import {test, expect} from '@playwright/test'

test('AlertsDemo', async ({page})=>{

await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
await page.waitForTimeout(3000);

page.on('dialog', async dialog =>{

//await dialog.accept();
//await dialog.dismiss();
console.log('Alert Message: ',await dialog.message());
await dialog.accept('Nadeem Ahmed');
})

//await page.getByRole('button', {name: 'Click Me'}).first().click();
//await page.getByRole('button', {name: 'Click Me'}).nth(1).click();
await page.getByRole('button', {name: 'Click Me'}).nth(2).click();
await page.waitForTimeout(3000);


})