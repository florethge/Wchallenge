const { Selector, t } = require("testcafe");

class Navbar{
    constructor(){
        this.logout= Selector('#logout_sidebar_link');
    }
}