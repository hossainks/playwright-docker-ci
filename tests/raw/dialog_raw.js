import { expect, test } from '@playwright/test';
import { DatePicker } from '../../page-objects/datePicker.js';

test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.getByText('Modal & Overlays').click();
    await page.getByText('Dialog').click();
});

test('Open Dialog test', async ({ page }) => {
    const componetDialog = page.getByRole('button', { name: 'Open Dialog with component' });
    const templateDialog = page.getByRole('button', { name: 'Open Dialog with template' });
    await componetDialog.click();
    await expect(page.locator('nb-dialog-container nb-card-header')).toHaveText("This is a title passed to the dialog component");
    await expect(page.locator('nb-dialog-container nb-card-body')).toContainText("Lorem ipsum dolor sit amet");
    await page.getByRole('button', { name: 'Dismiss Dialog' }).click();
    await templateDialog.click();
    await expect(page.locator('nb-dialog-container nb-card-header')).toHaveText("Template Dialog");
    await expect(page.locator('nb-dialog-container nb-card-body')).toContainText("this is some additional data passed to dialog");
    await page.getByRole('button', { name: 'Close Dialog' }).click();
    // Checking that the dialog is closed after clicking outside the dialog
     await componetDialog.click();
     await page.locator("nb-dialog-container").waitFor({ state: 'visible' });
     await page.waitForTimeout(1000);
     await page.mouse.click(0, 0);
     await expect(page.locator("nb-dialog-container")).not.toBeVisible();
})

test('Open Without Backdrop test', async ({ page }) => {
    const componetDialog = page.getByRole('button', { name: 'Open Dialog with backdrop' , exact: true });
    const templateDialog = page.getByRole('button', { name: 'Open Dialog without backdrop' });
    await componetDialog.click();
    await expect(page.locator('nb-dialog-container nb-card-header')).toHaveText("This is a title passed to the dialog component");
    await expect(page.locator('nb-dialog-container nb-card-body')).toContainText("Lorem ipsum dolor sit amet");
    await page.getByRole('button', { name: 'Dismiss Dialog' }).click();
    await templateDialog.click();
    await expect(page.locator('nb-dialog-container nb-card-header')).toHaveText("Template Dialog");
    await expect(page.locator('nb-dialog-container nb-card-body')).toContainText("this is some additional data passed to dialog");
    await page.getByRole('button', { name: 'Close Dialog' }).click();
    // Checking that the dialog is closed after clicking outside the dialog
     await componetDialog.click();
     await page.locator("nb-dialog-container").waitFor({ state: 'visible' });
     await page.waitForTimeout(1000);
     await page.mouse.click(0, 0);
     await expect(page.locator("nb-dialog-container")).not.toBeVisible();
})

test('Open Without Esc Close test', async ({ page }) => {
    const componetDialog = page.getByRole('button', { name: 'Open Dialog with esc close' , exact: true });
    const templateDialog = page.getByRole('button', { name: 'Open Dialog without esc close' });
    await componetDialog.click();
    await expect(page.locator('nb-dialog-container nb-card-header')).toHaveText("This is a title passed to the dialog component");
    await expect(page.locator('nb-dialog-container nb-card-body')).toContainText("Lorem ipsum dolor sit amet");
    await page.getByRole('button', { name: 'Dismiss Dialog' }).click();
    await templateDialog.click();
    await expect(page.locator('nb-dialog-container nb-card-header')).toHaveText("Template Dialog");
    await expect(page.locator('nb-dialog-container nb-card-body')).toContainText("this is some additional data passed to dialog");
    await page.getByRole('button', { name: 'Close Dialog' }).click();
    // Checking that the dialog is closed after clicking outside the dialog
     await componetDialog.click();
     await page.locator("nb-dialog-container").waitFor({ state: 'visible' });
     await page.waitForTimeout(1000);
     await page.mouse.click(0, 0);
     await expect(page.locator("nb-dialog-container")).not.toBeVisible();
})

test('Open Without Backdrop Click Test', async ({ page }) => {
    const componetDialog = page.getByRole('button', { name: 'Open Dialog with backdrop click' , exact: true });
    const templateDialog = page.getByRole('button', { name: 'Open without backdrop click' });
    await componetDialog.click();
    await expect(page.locator('nb-dialog-container nb-card-header')).toHaveText("This is a title passed to the dialog component");
    await expect(page.locator('nb-dialog-container nb-card-body')).toContainText("Lorem ipsum dolor sit amet");
    await page.getByRole('button', { name: 'Dismiss Dialog' }).click();
    await templateDialog.click();
    await expect(page.locator('nb-dialog-container nb-card-header')).toHaveText("Template Dialog");
    await expect(page.locator('nb-dialog-container nb-card-body')).toContainText("this is some additional data passed to dialog");
    await page.getByRole('button', { name: 'Close Dialog' }).click();
    // Checking that the dialog is closed after clicking outside the dialog
     await componetDialog.click();
     await page.locator("nb-dialog-container").waitFor({ state: 'visible' });
     await page.waitForTimeout(1000);
     await page.mouse.click(0, 0);
     await expect(page.locator("nb-dialog-container")).not.toBeVisible();
})