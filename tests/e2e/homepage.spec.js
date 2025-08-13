import { test, expect } from '@playwright/test';
import { HomePage } from '../../page-objects/homepage';

test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
});

test('Verify Smart Devices Status', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.toggleAndVerifyStatus('Light');
    await homePage.toggleAndVerifyStatus('Roller Shades');
    await homePage.toggleAndVerifyStatus('Wireless Audio');
    await homePage.toggleAndVerifyStatus('Coffee Maker');
});

test('Verify Tempareture and Humidity', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verifyInitialState();
    await homePage.togglePower();
    await homePage.adjustTempature([
        { offsetX: 13, offsetY: 175, expectedTemp: '30' },
        { offsetX: -90, offsetY: -38, expectedTemp: '21' },
        { offsetX: -222, offsetY: 86, expectedTemp: '15' }, 
    ])
    await homePage.verifyUnit('Celsius');
});

test('Verify Room Management', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verifySelectedRoom('Living Room');
    await homePage.selectRoom('Bedroom');
    await homePage.selectRoom('Kitchen');
    await homePage.selectRoom('Living Room');
    await homePage.selectRoom('Hallway');
});