import { expect, test } from '@playwright/test';
import { DatePicker } from '../../page-objects/datePicker.js';

test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.getByText('Forms').click();
    await page.getByText('Datepicker').click();
});

test('Select Date From Common Date Picker', async ({ page }) => {
    const datePicker = new DatePicker(page);
    await datePicker.openDatePicker('Form Picker');
    const today = datePicker.getDate(new Date()).getMonthYear;
    await datePicker.verifyCalenderDate(today);
    const dateToSelect = "Sep 25, 2028"
    await datePicker.selectDate(dateToSelect);
    //expect(await datePicker.getLatestDate('Form Picker')).toEqual(dateToSelect);
})

test('Select Date Picker With Range', async ({ page }) => {
    const datePicker = new DatePicker(page);
    await datePicker.openDatePicker('Range Picker');
    const today = datePicker.getDate(new Date()).getMonthYear;
    await datePicker.verifyCalenderDate(today);
    const startDate = "Sep 25, 2027"
    const EndDate = "Oct 25, 2027"
    await datePicker.selectDate(startDate);
    await datePicker.selectDate(EndDate);
    //expect(await datePicker.getLatestDate('Range Picker')).toEqual(`${startDate} - ${EndDate}`);
})