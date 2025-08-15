import { expect, test } from '@playwright/test';
import { asyncWrapProviders } from 'async_hooks';
// import { faker } from '@faker-js/faker';
// import { FromLayouts } from '../../page-objects/formLayouts';

test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.getByText('Forms').click();
    await page.getByText('Datepicker').click();
});

test.skip('Select Date From Common Date Picker', async ({ page }) => {
    const datePicker = page.locator('[placeholder="Form Picker"]');
    await datePicker.click();
    const data = new Date();
    const today = data.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    const dateOnCalender = page.locator('[ng-reflect-view-mode="date"] [nbbutton]');
    await expect(dateOnCalender).toHaveText(` ${today} `);
    const dateToSelect = "Aug 30, 2026"

    const nextButton = page.locator('button[class*="next-month"]');
    const newData = new Date(dateToSelect);
    const actualDate = newData.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    const day = newData.getDate();
    console.log(actualDate, day, today);
    await dateOnCalender.waitFor();
    let getCurrentDate = (await dateOnCalender.textContent()).trim();

    while (getCurrentDate !== actualDate) {
        await nextButton.click();
        await expect(dateOnCalender).toBeVisible();
        getCurrentDate = (await dateOnCalender.textContent()).trim();
    }
    const selectDate = page.locator(`.day-cell:not(.bounding-month) .cell-content`, { hasText: `${day}` });
    await selectDate.click();
    await expect(datePicker).toHaveValue(dateToSelect);
})

test.skip('Select Date Picker With Range', async ({ page }) => {
    const datePicker = page.locator('[placeholder="Range Picker"]');
    await datePicker.click();
    const data = new Date();
    const today = data.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    const dateOnCalender = page.locator('[ng-reflect-view-mode="date"] [nbbutton]');
    await expect(dateOnCalender).toHaveText(` ${today} `);
    const dateToSelect1 = "Aug 30, 2040"

    const nextButton = page.locator('button[class*="next-month"]');
    const newData = new Date(dateToSelect1);
    const actualDate = newData.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    const day = newData.getDate();
    console.log(actualDate, day, today);
    await dateOnCalender.waitFor();
    let getCurrentDate = (await dateOnCalender.textContent()).trim();

    while (getCurrentDate !== actualDate) {
        await nextButton.click();
        await expect(dateOnCalender).toBeVisible();
        getCurrentDate = (await dateOnCalender.textContent()).trim();
    }
    const selectDate = page.locator(`.day-cell:not(.bounding-month) .cell-content`, { hasText: `${day}` });
    await selectDate.click();
    //await expect(datePicker).toHaveValue(dateToSelect);
})