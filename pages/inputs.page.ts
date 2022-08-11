import { Page, Locator } from "@playwright/test";

export class InputsPage {
    readonly page: Page
    readonly messageInput: Locator
    readonly selectInput: Locator
    readonly uploadFileInput: Locator
    readonly checkBox: Locator
    readonly radioBtn1: Locator
    readonly radioBtn2: Locator
    readonly radioBtn3: Locator
    readonly switch: Locator
    readonly submitBtn: Locator

    constructor (page: Page) {
        this.page = page
        this.messageInput = page.locator('#message')
        this.selectInput = page.locator('#inputGroupSelect01')
        this.uploadFileInput = page.locator('#inputGroupFile')
        this.checkBox = page.locator('#flexCheckDefault')
        this.radioBtn1 = page.locator('#flexRadioDefault1')
        this.radioBtn2 = page.locator('#flexRadioDefault2')
        this.radioBtn3 = page.locator('#flexRadioDefault3')
        this.switch = page.locator('#flexSwitchCheckDefault')
        this.submitBtn = page.locator('#inputsBtn')
    }

    async writeMessage(message: string) {
        await this.messageInput.fill(message)
    }

    async selectOption(option: string) {
        await this.selectInput.selectOption(option)
    }

    async uploadFile(file: string) {
        await this.uploadFileInput.setInputFiles(file)
    }

    async clickCheckbox() {
        await this.checkBox.check()
    }

    async clickRadioBtn(radioBtn: number) {
        switch (radioBtn) {
            case 1:
                await this.radioBtn1.click()
                break
            case 2:
                await this.radioBtn2.click()
                break
            case 3:
                await this.radioBtn3.click()
                break
        }
    }

    async flickSwitch() {
        await this.switch.click()
    }

    async sendForm() {
        await this.submitBtn.click()
    }
}
