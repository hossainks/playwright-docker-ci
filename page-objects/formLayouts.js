import { expect } from "@playwright/test";
import {faker } from '@faker-js/faker';
import { selectors } from "../utils/locatorUtils.js";

export class FromLayouts {
    constructor(page) {
        this.page = page;
        this.getFieldByID = selectors.locatorByID.bind(null, page);
        this.getFieldByPlaceholder = selectors.locatorByPlaceholder.bind(null, page);
        this.byCard = selectors.locatorByCards.bind(null, page);
    }
    
    async fillUserFormData({ cardName, placeholderName, byID, value, assert = true }) {
        let locator;
        const userInputData = value || faker.internet.username();
        if (byID) {
            locator = this.getFieldByID(byID);
        } else if (cardName && placeholderName) {
            locator = this.byCard(cardName).getByPlaceholder(placeholderName);
        }
        else {
            throw new Error('You must provide either byID or cardName + placeholder');
        }
        await locator.fill(userInputData);
        if (assert) {
            await expect(locator).toHaveValue(userInputData);
        }
    }
    async setSelection({ cardName, optionName, byRole, assert = true }) {
        let locator = this.byCard(cardName).getByRole(byRole, { name: optionName });
        await locator.click({ force: true });
        if (byRole === 'checkbox' && assert) {
            await expect(locator).toBeChecked();
        }
    }

    async clickButton({ cardName, buttonName, assert = false }) {
        let locator = this.byCard(cardName).getByRole('button', { name: buttonName });
        await locator.click();
        if (assert) {
            await expect(locator).toBeVisible();
        }
    }
}