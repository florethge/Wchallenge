const { Selector, t } = require("testcafe");

class Navbar{
    constructor(){
        this.logout= Selector('#logout_sidebar_link');
        this.menu= Selector('#react-burger-menu-btn')
    }
    async logoutClick(){
        await t.click(this.menu);
        await t.click(this.logout);
    }
}
export default new Navbar();
