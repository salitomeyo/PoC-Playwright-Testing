import { test, expect } from '@playwright/test'

import { HomePage } from '../../pages/home.page'
import { Navbar } from '../../pages/components/navbar'

test.describe("Full SignUp page visual testing", () => {
    let homePage: HomePage
    let navbar: Navbar

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        navbar = new Navbar(page)

        await homePage.visit()
        await navbar.clickOnDropdown('SignUp')
    })

    test("Comparing full screenshot", async ({ page }) => {
        expect(await page.screenshot()).toMatchSnapshot('login-page.png')
    })
})
