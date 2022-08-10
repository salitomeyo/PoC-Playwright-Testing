import { test, expect } from '@playwright/test'

import { Navbar } from '../../pages/components/navbar'
import { HomePage } from '../../pages/home.page'
import { LoginPage } from '../../pages/login.page'

test.describe("Login form", () => {
    let navbar: Navbar
    let homePage: HomePage
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        navbar = new Navbar(page)
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)

        await homePage.visit()
        await navbar.clickOnDropdown("Login")
    })

    test("Should fill login form", async ({ page }) => {
        await loginPage.fillLoginForm("random@email.email", "somePassword")
    })
})
