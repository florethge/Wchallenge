const { Selector, t } = require("testcafe");

class Cart{
    constructor(){
        this.cartButton= Selector('.shopping_cart_container');
        this.productCartName= Selector('.inventory_item_name');
        this.checkoutButton= Selector('.checkout_button')
    }
    async cartClick(){
        await t.click(this.cartButton);
    }
    async checkoutClick(){
        await t.click(this.checkoutButton);
    }

}
export default new Cart();
