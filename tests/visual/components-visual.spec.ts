import { test, expect } from "@playwright/test";

import { HomePage } from "../../pages/home.page";


test.describe('Visual Regression Testing Example', () => {
    let homePage: HomePage

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)

        await homePage.visit()
    })

    test('Title element snapshot', async ({ page }) => {
        const pageTitle = await page.locator('h1')
        expect(await pageTitle.screenshot()).toMatchSnapshot('page-title.png')
    })

    test('Accordion element snapshot', async ({ page }) => {
        const accordionComponent = await page.locator('#accordionExample')
        expect(await accordionComponent.screenshot()).toMatchSnapshot('accordion-comp.png')
    })

    test('Users element snapshot', async ({ page }) => {
        await homePage.clickOnShowUsers()
        const usersComponent = await page.locator('#users')
        expect(await usersComponent.screenshot()).toMatchSnapshot('users-comp.png')
    })
})
