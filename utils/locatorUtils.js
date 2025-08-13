export const selectors = {
    byTitle: (page, title) => page.locator(`[title="${title}"]`),
    backButton: (page) => page.locator("[data-name='arrow-back']"),
    room: function (page, roomName) {
        return page.locator(`g:has(.room-text:has-text("${roomName}"))`)
    }
}