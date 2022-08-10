import { test, expect } from '@playwright/test'

import { Navbar } from '../../pages/components/navbar'
import { HomePage } from '../../pages/home.page'
import { SignUpPage } from '../../pages/signup.page'

test.describe("Sign up form", () => {
    let navbar: Navbar
    let homePage: HomePage
    let signUpPage: SignUpPage

    test.beforeEach(async ({ page }) => {
        navbar = new Navbar(page)
        homePage = new HomePage(page)
        signUpPage = new SignUpPage(page)

        await homePage.visit()
        await navbar.clickOnDropdown("SignUp")
    })

    test("fill sign up form", async ({ page }) => {
        await signUpPage.fillSignUpForm("random@email.com", "randomPassword", "Pepe", "Software Engineer")
    })
})
