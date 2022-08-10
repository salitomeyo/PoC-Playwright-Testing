import { test, expect } from '@playwright/test'

import { Navbar } from '../../pages/components/navbar'
import { HomePage } from '../../pages/home.page'
import { InputsPage } from '../../pages/inputs.page'

test.describe("Testing random inputs", () => {
    let navbar: Navbar
    let homePage: HomePage
    let inputsPage: InputsPage

    test.beforeEach(async ({ page }) => {
        navbar = new Navbar(page)
        homePage = new HomePage(page)
        inputsPage = new InputsPage(page)

        await homePage.visit()
        await navbar.clickOnDropdown("Inputs")
    })

    test("should manipulate textarea, select and upload", async ({ page }) => {
        await inputsPage.writeMessage("This is a message and can contain multiple lines")
        await inputsPage.selectOption('2')
        await inputsPage.uploadFile('package.json')
        await page.waitForTimeout(5000)
    })

    test("should use checkbox, radio buttons and switches", async ({ page }) => {
        await inputsPage.clickCheckbox()
        await inputsPage.clickRadioBtn(1)
        await inputsPage.flickSwitch()
    })
})
