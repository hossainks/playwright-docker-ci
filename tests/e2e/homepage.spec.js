import { test, expect } from '@playwright/test';
import { Navigation } from '../../page-objects/navigation.js';

test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
});

test.only('Verify Smart Devices Status', async ({ page }) => {
    const lightCards = page.locator('nb-card', { hasText: 'Light' });
    let status = lightCards.locator('.status.paragraph-2');
    await expect(status).toHaveText('ON');
    await lightCards.click()
    status = lightCards.locator('.status.paragraph-2');
    await expect(status).toHaveText('OFF');
    await lightCards.click()
    status = lightCards.locator('.status.paragraph-2');
    await expect(status).toHaveText('ON');
    await page.waitForTimeout(2000);

    const rolarShadesCards = page.locator('nb-card', { hasText: 'Roller Shades' });
    status = rolarShadesCards.locator('.status.paragraph-2');
    await expect(status).toHaveText('ON');
    await rolarShadesCards.click()
    status = rolarShadesCards.locator('.status.paragraph-2');
    await expect(status).toHaveText('OFF');
    await rolarShadesCards.click()
    status = rolarShadesCards.locator('.status.paragraph-2');
    await expect(status).toHaveText('ON');
    await page.waitForTimeout(2000);

    const wirelessAudioCards = page.locator('nb-card', { hasText: 'Wireless Audio' });
    status = wirelessAudioCards.locator('.status.paragraph-2');
    await expect(status).toHaveText('ON');
    await wirelessAudioCards.click()
    status = wirelessAudioCards.locator('.status.paragraph-2');
    await expect(status).toHaveText('OFF');
    await wirelessAudioCards.click()
    status = wirelessAudioCards.locator('.status.paragraph-2');
    await expect(status).toHaveText('ON');
    await page.waitForTimeout(2000);

    const coffeeMakerCards = page.locator('nb-card', { hasText: 'Coffee Maker' });
    status = coffeeMakerCards.locator('.status.paragraph-2');
    await expect(status).toHaveText('ON');
    await coffeeMakerCards.click()
    status = coffeeMakerCards.locator('.status.paragraph-2');
    await expect(status).toHaveText('OFF');
    await coffeeMakerCards.click()
    status = coffeeMakerCards.locator('.status.paragraph-2');
    await expect(status).toHaveText('ON');
    await page.waitForTimeout(2000);
});