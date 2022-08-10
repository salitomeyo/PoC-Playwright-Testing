import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly submitBtn: Locator

    constructor (page: Page) {
        this.page = page
        this.emailInput = page.locator('#exampleInputEmail1')
        this.passwordInput = page.locator('#exampleInputPassword1')
        this.submitBtn = page.locator("#loginBtn")
    }

    async fillLoginForm(email: string, password: string) {
        await this.emailInput.type(email)
        await this.passwordInput.type(password)
        await this.submitBtn.click()
    }
}
