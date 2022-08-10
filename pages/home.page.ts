import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page
    readonly showUsersBtn: Locator
    readonly clearUsersBtn: Locator
    readonly showToastBtn: Locator
    readonly accordion1Btn: Locator
    readonly accordion2Btn: Locator
    readonly accordion3Btn: Locator
    readonly accordion1: Locator
    readonly accordion2: Locator
    readonly accordion3: Locator
    readonly users: Locator
    readonly title: Locator
    readonly toast: Locator
    readonly toastCloseBtn: Locator

    constructor (page: Page) {
        this.page = page
        this.showUsersBtn = page.locator('#showUsers')
        this.clearUsersBtn = page.locator('#clearUsers')
        this.showToastBtn = page.locator('#liveToastBtn')
        this.accordion1Btn = page.locator('#headingOne > button')
        this.accordion2Btn = page.locator('#headingTwo > button')
        this.accordion3Btn = page.locator('#headingThree > button')
        this.accordion1 = page.locator('#collapseOne')
        this.accordion2 = page.locator('#collapseTwo')
        this.accordion3 = page.locator('#collapseThree')
        this.users = page.locator('.user-container')
        this.title = page.locator('h1')
        this.toast = page.locator('#liveToast')
        this.toastCloseBtn = page.locator('#liveToast > .toast-header > button')
    }

    async visit() {
        await this.page.goto('https://salitomeyo.github.io/poc-playwright/')
    }

    async openAccordionItem(item: number) {
        switch (item) {
            case 1:
                await this.accordion1Btn.click()
                await expect(this.accordion1).toBeVisible()
                break
            case 2:
                await this.accordion2Btn.click()
                await expect(this.accordion2).toBeVisible()
                break
            case 3:
                await this.accordion3Btn.click()
                await expect(this.accordion3).toBeVisible()
                break
        }
    }

    async clickOnShowUsers() {
        await this.showUsersBtn.click()
        await expect(this.users).toHaveCount(6)
    }

    async clickOnClearUsers() {
        await this.clearUsersBtn.click()
    }

    async clickOnShowToast() {
        await this.showToastBtn.click()
        await expect(this.toast).toBeVisible()
    }

    async clickOnCloseToast() {
        await this.toastCloseBtn.click()
        await expect(this.toast).not.toBeVisible()
    }

    async assertTitle(title: string) {
        await expect(this.title).toBeVisible()
        await expect(this.title).toContainText(title)
    }
}
