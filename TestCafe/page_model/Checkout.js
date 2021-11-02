const { Selector, t } = require("testcafe");

class Checkout{
    constructor(){
        this.firstName= Selector('#first-name');
        this.lastName= Selector('#last-name');
        this.zipCode= Selector('#postal-code');
        this.continueButton= Selector('#continue');
        this.finishButton= Selector('#finish');
        this.titleCheckout= Selector('.title')
    }
    async fillCheckoutForm(firstName, lastName, zipCode){
        await t.typeText(this.firstName, firstName);
        await t.typeText(this.lastName, lastName);
        await t.typeText(this.zipCode, zipCode);
    }
    async continueButtonClick(){
        await t.click(this.continueButton);
    }
    async finishButtonClick(){
        await t.click(this.finishButton);
    }
}

export default new Checkout();

