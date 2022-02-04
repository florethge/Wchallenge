import Login from '../pages/login-page'
import Products from '../pages/products-page'
import Cart from '../pages/cart-page'
import dotenv from 'dotenv'
import { URLS } from '../data/constants'
dotenv.config()

fixture `Add a specific product to cart Feature Test`
    .page `${URLS.HOME_URL}`;

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