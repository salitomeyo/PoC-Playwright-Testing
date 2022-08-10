import { Locator, Page } from '@playwright/test';

export class Navbar {
    readonly page: Page
    readonly hamburger: Locator
    readonly login: Locator
    readonly signUp: Locator
    readonly inputs: Locator

    constructor (page: Page) {
        this.page = page
        this.hamburger = page.locator('.hamburger')
        this.login = page.locator('a[data-bs-target="#loginModal"]')
        this.signUp = page.locator('a[data-bs-target="#signupModal"]')
        this.inputs = page.locator('a[data-bs-target="#inputsModal"]')
    }

    async clickOnDropdown(dropdownName: string) {
        await this.hamburger.click()
        switch (dropdownName) {
            case "Login":
                await this.login.click()
                break
            case "SignUp":
                await this.signUp.click()
                break
            case "Inputs":
                await this.inputs.click()
        }
    }
}
