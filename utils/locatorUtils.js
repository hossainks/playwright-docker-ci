export const selectors = {
    byTitle: (page, title) => page.locator(`[title="${title}"]`),
    backButton: (page) => page.locator("[data-name='arrow-back']"),
    room: function (page, roomName) {
        return page.locator(`g:has(.room-text:has-text("${roomName}"))`)
    },
    locatorByID: (page, id) => page.locator(`#${id}`),
    locatorByPlaceholder: (page, placeholder) => page.getByPlaceholder(`${placeholder}`),
    locatorByCards: (page, cardName) => page.locator('nb-card').filter({ hasText: `${cardName}` }),
    datePicker: (page, placeholder) => page.locator(`[placeholder="${placeholder}"]`),
    dialogContainer: (page, container, exact = false) => page.getByRole('button', { name: `${container}`, exact }),
    dialogTitle: (page) => page.locator('nb-dialog-container nb-card-header'),
    dialogBody: (page) => page.locator('nb-dialog-container nb-card-body'),
    dialogButton: (page, button) => page.getByRole('button', { name: `${button}` }),
    container: (page) => page.locator('nb-dialog-container'),
}