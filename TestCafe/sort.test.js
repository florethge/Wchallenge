import Login from './page_model/Login'
import Products from './page_model/Products'
import dotenv from 'dotenv'
dotenv.config()

fixture `Sort Low to High Feature Tests`
    .page `https://www.saucedemo.com/`;

test
    ('Sort products from low to high feature ', async t => {
        await Login.enterLogin(process.env.USERNAME_STANDARD, process.env.PASSWORD)
        await Products.sortLowToHighClick()
        let prices = await Products.price.count
        for (let index = 0; index < prices-1; index++) {
            let firstElement = await Products.price.nth(index).innerText
            let secondElement = await Products.price.nth(index+1).innerText
            await t.expect(Products.getValue(firstElement)).lte(Products.getValue(secondElement), "Comparison Failed: Product price isn´t lower than next product.")
        }
    });