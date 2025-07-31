export const selectors = {
    byTitle: (page, title) => page.locator(`[title="${title}"]`),
    backButton : (page) => page.locator("[data-name='arrow-back']")
}