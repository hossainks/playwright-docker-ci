import { test, expect } from '@playwright/test';
import { Navigation } from '../../page-objects/navigation.js';

test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
});

test('verify user is on the home page', async ({ page }) => {
    const navigation = new Navigation(page);
    await navigation.verifyUserIsOnHomePage();
});

test('Navigate To Fixtures', async ({ page }) => {
    const navigation = new Navigation(page);
    await navigation.navigateToFromFixtures();
    await navigation.navigateToModalOverlays();
    await navigation.navigateToExtraComponents();
    await navigation.navigateToCharts();
    await navigation.navigateToTablesAndData();

    // Navigate to the "Auth" section
    const auth = page.locator("[title='Auth']");
    await auth.click();
    let isAuthExpanded = await auth.getAttribute('aria-expanded');
    expect(isAuthExpanded).toBe('true');
    await page.locator("[title='Login']").click();
    await page.locator("[data-name='arrow-back']").click();
    await page.waitForTimeout(1000);
    await page.locator("[title='Register']").click();
    await page.locator("[data-name='arrow-back']").click();
    await page.waitForTimeout(1000);
    await page.locator("[title='Request Password']").click();
    await page.locator("[data-name='arrow-back']").click();
    await page.waitForTimeout(1000);
    await page.locator("[title='Reset Password']").click();
    await page.locator("[data-name='arrow-back']").click();
    await page.waitForTimeout(1000);
    await auth.click();
    await page.waitForTimeout(1000);
    isAuthExpanded = await auth.getAttribute('aria-expanded');
    expect(isAuthExpanded).toBe('false'); // Verify the section is collapsed
});