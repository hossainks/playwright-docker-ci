import { expect } from "@playwright/test";
import { selectors } from "../utils/locatorUtils.js";

export class Dialogs {
    constructor(page) {
        this.page = page;
        this.dialogContainer = selectors.dialogContainer.bind(null, page);
        this.dialogTitle = selectors.dialogTitle.bind(null, page);
        this.dialogBody = selectors.dialogBody.bind(null, page);
        this.dialogButton = selectors.dialogButton.bind(null, page);
        this.container = selectors.container.bind(null, page);
    }
    async clickOnDialog(name, exact = false) {
        await this.dialogContainer(name, exact).click();
    }
    async verifyDialogContent(title, body) {
        await expect(this.dialogTitle()).toHaveText(title);
        await expect(this.dialogBody()).toContainText(body);
    }
    async ClickCloseButton(name) {
        await this.dialogButton(name).click();
    }

    async verifyDialogIsClosed(containerName, exact = false) {
        await this.dialogContainer(containerName, exact).click();
        await this.container().waitFor({ state: 'visible' });
        await this.page.waitForTimeout(1000);
        await this.page.mouse.click(0, 0);
        await expect(this.container()).not.toBeVisible();
    }
}