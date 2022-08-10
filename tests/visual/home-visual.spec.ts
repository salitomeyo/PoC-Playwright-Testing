import { test, expect } from '@playwright/test'

import { HomePage } from '../../pages/home.page'

test.describe("Full home page visual testing", () => {
    let homePage: HomePage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)

        await homePage.visit()
    })

    test("Comparing full screenshot", async ({ page }) => {
        expect(await page.screenshot()).toMatchSnapshot('home-page.png')
    })
})
