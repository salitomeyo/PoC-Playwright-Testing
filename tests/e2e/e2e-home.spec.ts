import { test } from '@playwright/test'

import { HomePage } from '../../pages/home.page'

test.describe("Testing home page functionality", () => {
    let homePage: HomePage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)

        await homePage.visit()
    })

    test("Should show users and clear them", async ({ page }) => {
        await homePage.assertTitle('This is a web example for Playwright testing')
        await homePage.clickOnShowUsers()
        await homePage.clickOnClearUsers()
    })

    test("Should show toast", async ({ page }) => {
        await homePage.clickOnShowToast()
        await homePage.clickOnCloseToast()
    })

    test("Should interact with accordion", async ({ page }) => {
        await homePage.openAccordionItem(2)
        await homePage.openAccordionItem(1)
        await homePage.openAccordionItem(3)
    })
})
