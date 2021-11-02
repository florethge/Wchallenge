import Login from './page_model/Login'
import Products from './page_model/Products'
import Cart from './page_model/Cart'
import dotenv from 'dotenv'
dotenv.config()

fixture `Add products to cart Feature Tests`
    .page `https://www.saucedemo.com/`;

test
    ('Add multiple products to shopping cart', async t => {
        await Login.enterLogin(process.env.USERNAME_STANDARD, process.env.PASSWORD)
        let products = await Products.addProductButton.count
        let productArray = new Array(products)
        for (let index = 0; index < products; index++) {
            productArray[index] = await Products.addToCart(index)
        }
        await Cart.cartClick()
        let cartProducts = await Cart.productCartName.count
        for (let index = 0; index < cartProducts; index++) {
            await t.expect(Cart.productCartName.nth(index).innerText).eql(productArray[index], 'Products not added correctly: selected products were not added to cart.')
        }

    });