import Login from './page_model/Login'
import Products from './page_model/Products'
import Cart from './page_model/Cart'
import dotenv from 'dotenv'
dotenv.config()

fixture `Add a specific product to cart Feature Test`
    .page `https://www.saucedemo.com/`;

test
    ('Add a specific product to shopping cart', async t => {
        await Login.enterLogin(process.env.USERNAME_STANDARD, process.env.PASSWORD)
        let productsName = await Products.productName.count
        for (let index = 0; index < productsName; index++) {
            if (await Products.productName.nth(index).innerText == 'Sauce Labs Onesie')
                await Products.addToCart(index)
        }
        await Cart.cartClick()
        await t.expect(Cart.productCartName.innerText).contains('Sauce Labs Onesie', 'Product not Added: Sauce Labs Onsie was not added.');

    });