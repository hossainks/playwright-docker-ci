import { test } from '@playwright/test';
import { FromLayouts } from '../../page-objects/formLayouts';

test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test('Fill Inline Form Data', async ({ page }) => {
    const formLayouts = new FromLayouts(page);
    await formLayouts.fillUserFormData({ cardName: 'Inline form', placeholderName: 'Jane Doe' });
    await formLayouts.fillUserFormData({ cardName: 'Inline form', placeholderName: 'Email' });
    await formLayouts.setSelection({ cardName: 'Inline form', optionName: 'Remember me', byRole: 'checkbox' });
    await formLayouts.clickButton({ cardName: 'Inline form', buttonName: 'Submit' });
});

test('Fill Using the Grid Form', async ({ page }) => {
    const formLayouts = new FromLayouts(page);
    await formLayouts.fillUserFormData({ byID: 'inputEmail1' });
    await formLayouts.fillUserFormData({ byID: 'inputPassword2' });
    await formLayouts.setSelection({ cardName: 'Using the Grid', optionName: 'Option 1', byRole: 'radio' });
    await formLayouts.setSelection({ cardName: 'Using the Grid', optionName: 'Option 2', byRole: 'radio' });
    await formLayouts.clickButton({ cardName: 'Using the Grid', buttonName: 'Sign in' });
});

test('Fill Using Basic Form', async ({ page }) => {
    const formLayouts = new FromLayouts(page);
    await formLayouts.fillUserFormData({ byID: 'exampleInputEmail1' });
    await formLayouts.fillUserFormData({ byID: 'exampleInputPassword1' });
    await formLayouts.setSelection({ cardName: 'Basic form', optionName: 'Check me out', byRole: 'checkbox' });
    await formLayouts.clickButton({ cardName: 'Basic form', buttonName: 'Submit' });
});

test('Fill Form without labels', async ({ page }) => {
    const formLayouts = new FromLayouts(page);
    await formLayouts.fillUserFormData({ cardName: 'Form without labels', placeholderName: 'Recipients' });
    await formLayouts.fillUserFormData({ cardName: 'Form without labels', placeholderName: 'Subject' });
    await formLayouts.fillUserFormData({ cardName: 'Form without labels', placeholderName: 'Message', value: 'This is a test data check for the form' });
    await formLayouts.clickButton({ cardName: 'Form without labels', buttonName: 'Send' });
});

test('Fill Block form', async ({ page }) => {
    const formLayouts = new FromLayouts(page);
    await formLayouts.fillUserFormData({ byID: 'inputFirstName' });
    await formLayouts.fillUserFormData({ byID: 'inputLastName' });
    await formLayouts.fillUserFormData({ byID: 'inputEmail' });
    await formLayouts.fillUserFormData({ byID: 'inputWebsite' });
    await formLayouts.clickButton({ cardName: 'Block form', buttonName: 'Submit' });
});

test('Fill Horizontal form', async ({ page }) => {
    const formLayouts = new FromLayouts(page);
    await formLayouts.fillUserFormData({ byID: 'inputEmail3' });
    await formLayouts.fillUserFormData({ byID: 'inputPassword3' });
    await formLayouts.setSelection({ cardName: 'Horizontal form', optionName: 'Remember me', byRole: 'checkbox' });
    await formLayouts.clickButton({ cardName: 'Horizontal form', buttonName: 'Sign in' });
})