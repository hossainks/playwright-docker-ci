import { expect, test } from '@playwright/test';
import { Dialogs } from '../../page-objects/dialog.js';

test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.getByText('Modal & Overlays').click();
    await page.getByText('Dialog').click();
});

test('Open Dialog test', async ({ page }) => {
    const dialogs = new Dialogs(page);
    await dialogs.clickOnDialog('Open Dialog with component');
    await dialogs.verifyDialogContent("This is a title passed to the dialog component", "Lorem ipsum dolor sit amet");
    await dialogs.ClickCloseButton('Dismiss Dialog');
    await dialogs.clickOnDialog('Open Dialog with template');
    await dialogs.verifyDialogContent("Template Dialog", "this is some additional data passed to dialog");
    await dialogs.ClickCloseButton('Close Dialog');
})

test('Open Without Backdrop test', async ({ page }) => {
    const dialogs = new Dialogs(page);
    await dialogs.clickOnDialog('Open Dialog with backdrop', true);
    await dialogs.verifyDialogContent("This is a title passed to the dialog component", "Lorem ipsum dolor sit amet");
    await dialogs.ClickCloseButton('Dismiss Dialog');
    await dialogs.clickOnDialog('Open Dialog without backdrop');
    await dialogs.verifyDialogContent("Template Dialog", "this is some additional data passed to dialog");
    await dialogs.ClickCloseButton('Close Dialog');

    // Checking that the dialog is closed after clicking outside the dialog
    await dialogs.verifyDialogIsClosed('Open Dialog with backdrop', true);
})

test('Open Without Esc Close test', async ({ page }) => {
    const dialogs = new Dialogs(page);
    await dialogs.clickOnDialog('Open Dialog with esc close');
    await dialogs.verifyDialogContent("This is a title passed to the dialog component", "Lorem ipsum dolor sit amet");
    await dialogs.ClickCloseButton('Dismiss Dialog');
    await dialogs.clickOnDialog('Open Dialog without esc close');
    await dialogs.verifyDialogContent("Template Dialog", "this is some additional data passed to dialog");
    await dialogs.ClickCloseButton('Close Dialog');

    // Checking that the dialog is closed after clicking outside the dialog
    await dialogs.verifyDialogIsClosed('Open Dialog with esc close');
})

test('Open Without Backdrop Click Test', async ({ page }) => {
    const dialogs = new Dialogs(page);
    const componetDialog = page.getByRole('button', { name: 'Open Dialog with backdrop click', exact: true });
    await dialogs.clickOnDialog('Open Dialog with backdrop click');
    await dialogs.verifyDialogContent("This is a title passed to the dialog component", "Lorem ipsum dolor sit amet");
    await dialogs.ClickCloseButton('Dismiss Dialog');
    await dialogs.clickOnDialog('Open without backdrop click');
    await dialogs.verifyDialogContent("Template Dialog", "this is some additional data passed to dialog");
    await dialogs.ClickCloseButton('Close Dialog');

    // Checking that the dialog is closed after clicking outside the dialog
    await dialogs.verifyDialogIsClosed('Open Dialog with backdrop click');
})