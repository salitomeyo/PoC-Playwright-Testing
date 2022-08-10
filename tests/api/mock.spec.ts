import { test, expect } from '@playwright/test'

import { HomePage } from '../../pages/home.page'

test.describe("Mock API functionalities", () => {
    let homePage: HomePage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)

        await homePage.visit()
    })

    test("Monitoring API requests", async ({ page }) => {
        page.on('request', request => {
            console.log(request.method(), request.url())
        })
        await homePage.clickOnShowUsers()
    });

    test("Intercepting API requests", async ({ page }) => {
        await page.route('**/api/users?page=1', async (route, request) => {
            console.log(request.postData())
            await route.continue()
            // await route.continue({
            //     postData: JSON.stringify({})
            // })
        })
        await homePage.clickOnShowUsers()
    });

    test("Mocking API requests", async ({ page }) => {
        // await homePage.clickOnShowUsers()
        await page.route('**/api/users?page=1', async (route, request) => {
            // console.log(request.postData())
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    data: [
                        {
                            "id": 1,
                            "email": "kitty@email.in",
                            "first_name": "Munchkin",
                            "last_name": "Kitty",
                            "avatar": "https://t2.uc.ltmcdn.com/es/posts/4/8/8/como_cuidar_a_un_gato_munchkin_45884_600.jpg"
                        },
                        {
                            "id": 2,
                            "email": "tigger@email.in",
                            "first_name": "Bengala",
                            "last_name": "Tiger Cub",
                            "avatar": "https://wallpaperaccess.com/full/2133227.jpg"
                        },
                        {
                            "id": 3,
                            "email": "tigerMom@email.in",
                            "first_name": "Bengala",
                            "last_name": "Tiger Mom",
                            "avatar": "https://imageio.forbes.com/specials-images/imageserve/616dd3aa628e15796961c1d2/Sumatran-tiger-cub-with-mother/960x0.jpg?format=jpg&width=960"
                        },
                        {
                            "id": 4,
                            "email": "random@email.in",
                            "first_name": "Random",
                            "last_name": "Lady",
                            "avatar": "https://reqres.in/img/faces/7-image.jpg"
                        },
                        {
                            "id": 5,
                            "email": "randomM@email.in",
                            "first_name": "Random",
                            "last_name": "Gentleman",
                            "avatar": "https://reqres.in/img/faces/11-image.jpg"
                        },
                        {
                            "id": 6,
                            "email": "Xena@email.in",
                            "first_name": "Xena",
                            "last_name": "Warrior Princess",
                            "avatar": "https://areajugones.sport.es/wp-content/uploads/2015/08/Xena-1080x609.jpeg"
                        }
                    ]
                })
            })
        })
        await homePage.clickOnShowUsers()
    });
})
