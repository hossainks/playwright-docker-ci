import { expect } from '@playwright/test';
import { selectors } from "../utils/locatorUtils.js";
export class Navigation {
    constructor(page) {
        this.page = page;
        this.get = {
            menu: selectors.byTitle.bind(null, page),
            backButton: selectors.backButton.bind(null, page),
        }
        this.lightCard = page.locator('nb-card', { hasText: 'Light' });
        this.statusIndicator = this.lightCard.locator('.status.paragraph-2');
    }
    async verifyUserIsOnHomePage() {
        await this.clickOnLightCard();
        expect(this.statusIndicator).toHaveText('OFF');
    }

    async clickOnLightCard() {
        await this.lightCard.waitFor({ state: 'visible' });
        await this.lightCard.click();
    }

    async navigateToFromFixtures() {
        const froms = this.get.menu('Forms');
        await this.isMenuExpanded(froms)
        await this.get.menu("Form Layouts").click()
        await this.get.menu('Datepicker').click()
        await froms.click();
        await this.page.waitForTimeout(1000);
        await this.isMenuExpanded(froms)
    }

    async navigateToModalOverlays() {
        const modal = this.get.menu('Modal & Overlays');
        await this.isMenuExpanded(modal)
        await this.get.menu('Dialog').click();
        await this.get.menu('Window').click();
        await this.get.menu('Popover').click();
        await this.get.menu('Toastr').click();
        await this.get.menu('Tooltip').click();
        await this.page.waitForTimeout(1000);
        await this.isMenuExpanded(modal)
    }

    async navigateToExtraComponents() {
        const component = this.get.menu('Extra Components');
        await this.isMenuExpanded(component)
        await this.get.menu('Calendar').click();
        await this.page.waitForTimeout(1000);
        await this.isMenuExpanded(component)
    }
    async navigateToCharts() {
        const chart = this.get.menu('Charts');
        await this.isMenuExpanded(chart)
        await this.get.menu('Echarts').click();
        await this.page.waitForTimeout(1000);
        await this.isMenuExpanded(chart)
    }
    async navigateToTablesAndData() {
        const table = this.get.menu('Tables & Data');
        await this.isMenuExpanded(table)
        await this.get.menu('Smart Table').click();
        await this.get.menu('Tree Grid').click();
        await this.page.waitForTimeout(1000);
        await this.isMenuExpanded(table)
    }

    async navigateToAuth() {
        const auth = this.get.menu('Auth');
        await this.isMenuExpanded(auth)
        await this.get.menu('Login').click();
        await this.get.menu('Register').click();
        await this.get.menu('Request Password').click();
        await this.get.menu('Reset Password').click();
        await this.page.waitForTimeout(1000);
        await this.isMenuExpanded(auth)
    }

    // async getFeature(feature) {
    //     return this.page.locator(`[title="${feature}"]`);
    // }
    
    async isMenuExpanded(locator) {
        const isExpanded = await locator.getAttribute('aria-expanded');
        if (isExpanded === 'false') {
            await locator.click();
        } else if (isExpanded === 'true') {
            await locator.click();
        }
    }
}