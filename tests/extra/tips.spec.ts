import { test } from "@playwright/test"

test.describe.only("some more tricks from Playwright", () => {
    test('TestInfo Object', async ({ page }, testInfo) => {
        await page.goto('https://www.example.com')
        console.log(testInfo.title)
    })

    test('Test skip browser', async ({ page, browserName }) => {
        test.skip(browserName === "webkit", "Feature not ready in Chrome browser")
        await page.goto('https://www.example.com')
    })

    test('Test fixme annotation', async ({ page, browserName }) => {
        test.fixme(browserName === "webkit", "Test not stable needs revision")
        await page.goto('https://www.example.com')
    })

    const people = ["Mike", "judy", "Peter"]
    for (const name of people) {
        test(`Runing test for ${name}`, async ({ page }) => {
            await page.goto("http://zero.webappsecurity.com/index.html")
            await page.type('#searchTerm', `${name}`)
        })
    }

    test('Mouse movement simulation', async ({ page }) => {
        await page.goto('https://www.autodraw.com/')
        await page.locator('.button.green').click()
        await page.mouse.move(0, 0)
        await page.mouse.down()
        await page.mouse.move(0, 1000)
        await page.mouse.move(1320, 1540)
        await page.mouse.move(2060, 0)
        await page.mouse.move(0, 4730)
        await page.mouse.up()
    })
})
