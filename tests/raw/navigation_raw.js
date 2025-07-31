import { test, expect } from '@playwright/test';
import { Navigation } from '../../page-objects/navigation.js';

test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
});

test.skip('verify user is on the home page', async ({ page }) => {
    const navigation = new Navigation(page);
    await navigation.verifyUserIsOnHomePage();
});

test.skip('Navigate To Fixtures', async ({ page }) => {
    // navigate to the "Form Fixtures" section
    const froms = page.locator("[title='Forms']");
    await froms.click();
    let isExpanded = await froms.getAttribute('aria-expanded');
    expect(isExpanded).toBe('true');

    await page.getByText("Form Layouts").click()
    await page.locator("[title='Datepicker']").click()
    await froms.click();
    await page.waitForTimeout(1000);
    isExpanded = await froms.getAttribute('aria-expanded');
    expect(isExpanded).toBe('false'); // Verify the section is collapsed

    // Navigate to the "Modal & Overlays" section
    const modal = page.locator("[title='Modal & Overlays']");
    await modal.click();
    let isModalExpanded = await modal.getAttribute('aria-expanded');
    expect(isModalExpanded).toBe('true');

    await page.locator("[title='Dialog']").click();
    await page.locator("[title='Window']").click();
    await page.locator("[title='Popover']").click();
    await page.locator("[title='Toastr']").click();
    await page.locator("[title='Tooltip']").click();
    await modal.click();
    await page.waitForTimeout(1000);
    isModalExpanded = await modal.getAttribute('aria-expanded');
    expect(isModalExpanded).toBe('false'); // Verify the section is collapsed
    await page.waitForTimeout(1000);

    // Navigate to the "Extra Components" section
    const component = page.locator("[title='Extra Components']");
    await component.click();
    let isComponentExpanded = await component.getAttribute('aria-expanded');
    expect(isComponentExpanded).toBe('true');
    await page.locator("[title='Calendar']").click();
    await page.waitForTimeout(1000);
    await component.click();
    await page.waitForTimeout(1000);
    isComponentExpanded = await component.getAttribute('aria-expanded');
    expect(isComponentExpanded).toBe('false'); // Verify the section is collapsed   
    await page.waitForTimeout(2000);

    // Navigate to the "Charts" section
    const chart = page.locator("[title='Charts']");
    await chart.click();
    let isChartExpanded = await chart.getAttribute('aria-expanded');
    expect(isChartExpanded).toBe('true');
    await page.locator("[title='Echarts']").click();
    await page.waitForTimeout(1000);
    await chart.click();
    await page.waitForTimeout(1000);
    isChartExpanded = await chart.getAttribute('aria-expanded');
    expect(isChartExpanded).toBe('false'); // Verify the section is collapsed

    // Navigate to the "Tables & Data" section
    const table = page.locator("[title='Tables & Data']");
    await table.click();
    let isTableExpanded = await table.getAttribute('aria-expanded');
    expect(isTableExpanded).toBe('true');
    await page.locator("[title='Smart Table']").click();
    await page.locator("[title='Tree Grid']").click();
    await page.waitForTimeout(1000);
    await table.click();
    await page.waitForTimeout(1000);
    isTableExpanded = await table.getAttribute('aria-expanded');
    expect(isTableExpanded).toBe('false'); // Verify the section is collapsed
    await page.waitForTimeout(3000);

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