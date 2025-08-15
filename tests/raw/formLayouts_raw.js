import { expect, test } from '@playwright/test';
import { beforeEach } from 'node:test';
import { faker } from '@faker-js/faker';


test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test.skip('Fill Inline Form Data', async ({ page }) => {
    const inlineFormCard = page.locator('.inline-form-card');
    const userName = inlineFormCard.getByPlaceholder('Jane Doe');
    const email = inlineFormCard.getByPlaceholder('Email');
    const rememberMe = inlineFormCard.getByRole('checkbox', { name: 'Remember me' }); // if accessible name exists
    const submit = inlineFormCard.getByRole('button', { name: 'Submit' });

    // const inlineFormCard = page.locator('.inline-form-card');
    // const userName = inlineFormCard.locator('[placeholder="Jane Doe"]');
    // const email = inlineFormCard.locator('[placeholder="Email"]');
    // const rememberMe = inlineFormCard.locator('[type="checkbox"]');
    // const submit = inlineFormCard.locator('[type="submit"]');
    const userFullName = faker.internet.username()
    await userName.fill(userFullName);
    await expect(userName).toHaveValue(userFullName);
    await email.fill(faker.internet.email());
    await expect(rememberMe).not.toBeChecked();
    await rememberMe.click({ force: true });
    await expect(rememberMe).toBeChecked();
    await submit.click();
});

test.skip('Fill Using the Grid Form', async ({ page }) => {
    const gridFormCard = page.locator('nb-card').filter({ hasText: 'Using the Grid' });
    const email = page.locator('#inputEmail1');
    const password = page.locator('#inputPassword2');
    const radioButton1 = page.getByRole('radio', { name: 'Option 1' }); 
    const radioButton2 = page.getByRole('radio', { name: 'Option 2' });
    const signIn = gridFormCard.getByRole('button', { name: 'Sign in' });

    await email.fill(faker.internet.email());
    await password.fill(faker.internet.password());
    await radioButton1.click( { force: true });
    await expect(radioButton1).toBeChecked();
    await radioButton2.click({ force: true });
    await expect(radioButton2).toBeChecked( { force: true });
    await signIn.click();
});

test.skip('Fill Using Basic Form', async ({ page }) => {
    const basicFormCard = page.locator('nb-card').filter({ hasText: 'Basic form' });
    const email = page.locator('#exampleInputEmail1');
    const password = page.locator('#exampleInputPassword1');
    const checkbox = basicFormCard.getByRole('checkbox'); 
    const submitButton = basicFormCard.getByRole('button', { name: 'Submit' });

    await email.fill(faker.internet.email());
    await password.fill(faker.internet.password());
    await checkbox.click( { force: true }); 
    await expect(checkbox).toBeChecked();
    await submitButton.click();
});


test.skip('Fill Form without labels', async ({ page }) => {
    const formWithOutlabel = page.locator('nb-card').filter({ hasText: 'Form without labels' });
    const recipients = formWithOutlabel.getByPlaceholder('Recipients');
    const subjects = formWithOutlabel.getByPlaceholder('Subject');
    const meassage = formWithOutlabel.getByPlaceholder('Message');
    const submitButton = formWithOutlabel.getByRole('button', { name: 'Send' });
    const recepientsName = faker.internet.username()
    await recipients.fill(recepientsName);
    await expect(recipients).toHaveValue(recepientsName);
    await subjects.fill("Test Data Check");
    await expect(subjects).toHaveValue("Test Data Check");
    await meassage.fill("This is a test data check for the form");
    await submitButton.click();
});

test.skip('Fill Block form', async ({ page }) => {
    const blockFrom = page.locator('nb-card').filter({ hasText: 'Block form' });
    const firstName = page.locator('#inputFirstName');
    const lastName = page.locator('#inputLastName');
    const email = page.locator('#inputEmail');
    const webSite = page.locator('#inputWebsite');
    const submitButton = blockFrom.getByRole('button', { name: 'Submit' });
    
    await firstName.fill(faker.person.firstName());
    await lastName.fill(faker.person.lastName());
    await email.fill(faker.internet.email());
    await webSite.fill(faker.internet.url());
    await submitButton.click();
});


test.skip('Fill Horizontal form', async ({ page }) => {
    const horizontalForm = page.locator('.form-horizontal');
    const email = page.locator('#inputEmail3');
    const password = page.locator('#inputPassword3');
    const rememberMe = horizontalForm.getByRole('checkbox', { name: 'Remember me' }); // if accessible name exists
    const signIn = horizontalForm.getByRole('button', { name: 'Sign in' });

    const fullEmail = faker.internet.email()
    await email.fill(fullEmail);
    await expect(email).toHaveValue(fullEmail);
    await password.fill(faker.internet.password());
    await expect(rememberMe).not.toBeChecked();
    await rememberMe.click({ force: true });
    await expect(rememberMe).toBeChecked();
    await signIn.click();
})