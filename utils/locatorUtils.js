export const selectors = {
    byTitle: (page, title) => page.locator(`[title="${title}"]`),
    backButton: (page) => page.locator("[data-name='arrow-back']"),
    room: function (page, roomName) {
        return page.locator(`g:has(.room-text:has-text("${roomName}"))`)
    },
    locatorByID: (page, id) => page.locator(`#${id}`),
    locatorByPlaceholder: (page, placeholder) => page.getByPlaceholder(`${placeholder}`),
    locatorByCards: (page, cardName) => page.locator('nb-card').filter({ hasText: `${cardName}`}),
    datePicker: (page, placeholder) => page.locator(`[placeholder="${placeholder}"]`),
}