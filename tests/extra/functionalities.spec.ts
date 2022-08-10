import { test } from "@playwright/test";
import { chromium, devices } from '@playwright/test'

test.describe("Extra Functionalities from Playwright", () => {
    test('Accesing different domains', async ({ page }) => {
        await page.goto('https://www.google.com')
        await page.waitForTimeout(2000)
        await page.goto('https://www.wikipedia.com')
        await page.waitForTimeout(2000)
    })

    test('Simulate device', async ({ page }) => {
        const browser = await chromium.launch();

        const iphone11 = devices['iPhone 11'];
        const context = await browser.newContext({
        ...iphone11,
        });

        const page1 = await context.newPage()
        await page1.goto('https://www.google.com')
        await page1.waitForTimeout(6000)
    })

    test('Multiple browser tabs', async ({ browser }) => {
        const context = await browser.newContext()
        const page1 = await context.newPage()
        const page2 = await context.newPage()
        const page3 = await context.newPage()

        await page1.goto('https://www.wikipedia.com')
        await page2.goto('https://www.google.com')
        await page3.goto('http://www.github.com')
        await page1.waitForTimeout(5000)
    })
})
