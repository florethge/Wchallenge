const { Selector, t } = require("testcafe");

class Products{
    constructor(){
        this.sortButton= Selector('.product_sort_container');
        this.price= Selector('.inventory_item_price')
        this.addProductButton= Selector('.btn_inventory');
        this.productName= Selector('.inventory_item_name')

    }
    async sortLowToHighClick(){
        await t.click(this.sortButton);
        let sortOptions = this.sortButton.find('option');
        await t.click(sortOptions.withText('Price (low to high)'));
    }
    getValue(price){
        let priceSplit = price.replace('$', '');
        return parseFloat(priceSplit)
    }
    async addToCart(index){
        await t.click(this.addProductButton.nth(index));
        return await this.productName.nth(index).innerText
    }
    
}
export default new Products();
