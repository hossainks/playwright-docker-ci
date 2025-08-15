import { expect } from "@playwright/test";
import { selectors } from "../utils/locatorUtils.js";
import selector from "../resources/pages/datePicker.json"
export class DatePicker {
    constructor(page) {
        this.page = page;
        this.datePicker = selectors.datePicker.bind(null, page);
        this.calenderDate = this.page.locator(selector.calendarDate);
        this.nextButton = this.page.locator(selector.nextButton);
    }
    async openDatePicker(candenderType) {
        await this.datePicker(candenderType).click();
    }
    async verifyCalenderDate(date) {
        await this.calenderDate.waitFor();
        await expect(this.calenderDate).toHaveText(date);
    }
    async navigateToMonth(targetMonthYear) {
        let currentMonthYear = (await this.calenderDate.textContent()).trim();
        while (currentMonthYear !== targetMonthYear) {
            await this.nextButton.click();
            await this.calenderDate.waitFor();
            currentMonthYear = (await this.calenderDate.textContent()).trim();
        }
    }
    async selectDay(date) {
        const day = this.page.locator(`.day-cell:not(.bounding-month) .cell-content`, { hasText: `${date}` });
        await day.click();
    }

    async selectDate(targerDate) {
        const actualTargetDate = this.getDate(targerDate);
        await this.navigateToMonth(actualTargetDate.getMonthYear);
        await this.selectDay(`${actualTargetDate.day}`);
    }
    getDate(date) {
        const actualDate = new Date(date);
        const getMonthYear = actualDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });
        const day = actualDate.getDate();
        return { getMonthYear, day }
    }
    async getLatestDate(calenderType) {
        const latestDate = await this.datePicker(calenderType).textContent();
        return latestDate;
    }
}