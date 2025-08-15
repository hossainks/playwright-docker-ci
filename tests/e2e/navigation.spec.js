import { test, expect } from '@playwright/test';
import { Navigation } from '../../page-objects/navigation.js';

test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
});

test('verify user is on the home page', async ({ page }) => {
    const navigation = new Navigation(page);
    await navigation.verifyHomePage();
});

test('Navigate To Fixtures', async ({ page }) => {
    const navigation = new Navigation(page);
    await navigation.navigateToFromFixtures();
    await navigation.navigateToModalOverlays();
    await navigation.navigateToExtraComponents();
    await navigation.navigateToCharts();
    await navigation.navigateToTablesAndData();
    await navigation.navigateToAuth();
});