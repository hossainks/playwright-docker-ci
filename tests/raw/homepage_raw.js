import { test, expect } from '@playwright/test';
import { Navigation } from '../../page-objects/navigation.js';
import homepage from '../../resources/pages/homepage.json'

test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
});

test.skip('Verify Smart Devices Status', async ({ page }) => {
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

test.skip('Verify Tempareture and Humidity', async ({ page }) => {
    console.log(homepage.lightStatus);
    const defaultTempareture = page.locator(".temperature-bg .temperature.h1");
    await expect(defaultTempareture).toHaveText(' 24 ');
    const tempatureUnit = page.locator(".temperature-bg .desc");
    await expect(tempatureUnit).toHaveText(' Celsius ');

    const powerButton = page.locator(".power-bg").first();
    await powerButton.getAttribute('class').then((value) => expect(value?.split(' ')).toContain('on'));
    await powerButton.click();
    await expect(powerButton).not.toHaveAttribute('class', /\bon\b/);
    await powerButton.click();
    await expect(powerButton).toHaveAttribute('class', /\bon\b/);

    const temperatureSlider = page.locator("circle[fill='#f7f9fc']").first()
    expect(temperatureSlider).toBeVisible();

    const box = await temperatureSlider.boundingBox();
    const startX = box.x + box.width / 2;
    const startY = box.y + box.height / 2;
    console.log(startX, startY);

    // Move Down
    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(startX + 13, startY + 175, { steps: 100 });
    await expect(defaultTempareture).toHaveText(' 30 ');
    await page.mouse.move(startX - 90, startY - 38, { steps: 100 });
    await expect(defaultTempareture).toHaveText(' 21 ');
    await page.mouse.move(startX - 222, startY + 86, { steps: 100 });
    await page.mouse.up();
    await expect(defaultTempareture).toHaveText(' 15 ');
    await expect(tempatureUnit).toHaveText(' Celsius ');
});

test.skip('Verify Room Management', async ({ page }) => {
    const selectedRoom = page.locator('.selected-room .room-text');
    await expect(selectedRoom).toHaveText('Living Room');
    await page.locator('g:has(.room-text:has-text("Bedroom"))').click();
    await expect(selectedRoom).toHaveText('Bedroom');
    await page.locator('g:has(.room-text:has-text("Kitchen"))').click();
    await expect(selectedRoom).toHaveText('Kitchen');
    await page.locator('g:has(.room-text:has-text("Living Room"))').click();
    await expect(selectedRoom).toHaveText('Living Room');
    await page.locator('g:has(.room-text:has-text("Hallway"))').click();
    await expect(selectedRoom).toHaveText('Hallway');
});