import { test, expect } from '@playwright/test'

import { HomePage } from '../../pages/home.page'
import { Navbar } from '../../pages/components/navbar'

test.describe("Full Login page visual testing", () => {
    let homePage: HomePage
    let navbar: Navbar

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        navbar = new Navbar(page)

        await homePage.visit()
        await navbar.clickOnDropdown('Login')
    })

    test("Comparing full screenshot", async ({ page }) => {
        expect(await page.screenshot()).toMatchSnapshot('login-page.png')
    })
})
