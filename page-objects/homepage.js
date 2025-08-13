import { expect } from '@playwright/test';
import homepage from '../resources/pages/homepage.json'
import { selectors } from '../utils/locatorUtils';
export class HomePage {
    constructor(page) {
        this.page = page;
        this.locator = homepage;
        this.powerButton = this.page.locator(this.locator.powerButton).first();
        this.temperature = this.page.locator(this.locator.defaultTempareture);
        this.tempatureUnit = this.page.locator(this.locator.tempatureUnit);
        this.selectedRoom = this.page.locator(this.locator.selectedRoom);
        this.roomName = selectors.room.bind(null,this.page);
    }
    card(cardName) {
        const card = this.page.locator('nb-card', { hasText: cardName });
        const status = card.locator('.status.paragraph-2');
        return { card, status };
    }
    async toggleAndVerifyStatus(cardName) {
        const { card, status } = this.card(cardName);
        await expect(status).toHaveText('ON');
        await card.click();
        await expect(status).toHaveText('OFF');
        await card.click();
        await expect(status).toHaveText('ON');
        await this.page.waitForTimeout(300);
    }
    async verifyInitialState(expectedTemp = '24', expectedUnit = 'Celsius') {
        const tempatureUnit = this.page.locator(this.locator.tempatureUnit);

        await expect(this.temperature).toHaveText(` ${expectedTemp} `);
        await expect(tempatureUnit).toHaveText(` ${expectedUnit} `);
        await this.powerButton.getAttribute('class').then((value) =>
            expect(value?.split(' ')).toContain('on')
        );
    }

    async togglePower() {
        await this.powerButton.click();
        await expect(this.powerButton).not.toHaveAttribute('class', /\bon\b/);
        await this.powerButton.click();
        await expect(this.powerButton).toHaveAttribute('class', /\bon\b/);
    }
    async adjustTempature(moves = []) {
        const slider = this.page.locator(this.locator.temperatureSlider).first();
        const box = await slider.boundingBox();
        const startX = box.x + box.width / 2;
        const startY = box.y + box.height / 2;
        await this.page.mouse.move(startX, startY);
        await this.page.mouse.down();
        for (const move of moves) {
            const { offsetX, offsetY, expectedTemp } = move;
            await this.page.mouse.move(startX + offsetX, startY + offsetY, { steps: 100 });
            if (expectedTemp) {
                await expect(this.temperature).toHaveText(` ${expectedTemp} `);
            }
        }
        await this.page.mouse.up();
    }

    async verifyUnit(expectedUnit) {
    await expect(this.tempatureUnit).toHaveText(` ${expectedUnit} `);
  }

  async verifySelectedRoom(expectedRoom) {
    await expect(this.selectedRoom).toHaveText(expectedRoom);
  }

   async selectRoom(roomName) {
    await this.roomName(roomName).click();
    await this.verifySelectedRoom(roomName);
  }
}