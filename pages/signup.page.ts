import { Page, Locator } from "@playwright/test";

export class SignUpPage {
    readonly page: Page
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly nameInput: Locator
    readonly jobInput: Locator
    readonly submitBtn: Locator

    constructor (page: Page) {
        this.page = page
        this.emailInput = page.locator('#signupInputEmail')
        this.passwordInput = page.locator('#signupInputPassword')
        this.nameInput = page.locator('#signupInputName')
        this.jobInput = page.locator('#signupInputJob')
        this.submitBtn = page.locator('#signUpBtn')
    }

    async fillSignUpForm(email: string, password: string, name: string, job: string) {
        await this.emailInput.type(email)
        await this.passwordInput.type(password)
        await this.nameInput.type(name)
        await this.jobInput.type(job)
        await this.submitBtn.click()
    }
}
