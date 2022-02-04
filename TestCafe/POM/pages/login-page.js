const { Selector, t } = require("testcafe");

class Login{
    constructor(){
        this.username= Selector('#user-name');
        this.password= Selector('#password');
        this.loginButton= Selector('#login-button');
        //this.loginError= Selector('h3[data-test="error"]')
        this.loginError= Selector('.error-message-container');
    }

    async enterLogin(username, password){
        if (username != ''){
            await t.typeText(this.username, username);
        }
        if (password != ''){
            await t.typeText(this.password, password);
        }
        await t.click(this.loginButton);
    }
}

export default new Login();
