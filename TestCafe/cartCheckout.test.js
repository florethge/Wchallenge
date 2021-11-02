import Login from './page_model/Login'
import Products from './page_model/Products'
import Cart from './page_model/Cart'
import dotenv from 'dotenv'
import Checkout from './page_model/Checkout'
dotenv.config()

fixture `Complete purchase Feature Test`
    .page `https://www.saucedemo.com/`;

test
    ('Checkout flow test', async t => {
        await Login.enterLogin(process.env.USERNAME_STANDARD, process.env.PASSWORD)
        await Products.addToCart(0);
        await Cart.cartClick()
        await t.expect(Cart.productCartName.exists).ok('Product not Added: no products added to cart.');
        await Cart.checkoutClick()
        await Checkout.fillCheckoutForm(process.env.FIRST_NAME, process.env.LAST_NAME, process.env.ZIP_CODE)
        await Checkout.continueButtonClick()
        await Checkout.finishButtonClick()
        await t.expect(Checkout.titleCheckout.innerText).eql('CHECKOUT: COMPLETE!', 'Checkout unsuccessful: checkout incomplete.')
    });