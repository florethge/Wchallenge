import Login from './page_model/Login'
import Navbar from './page_model/Navbar'
import dotenv from 'dotenv'
dotenv.config()

fixture `Logout Feature Tests`
    .page `https://www.saucedemo.com/`;

test
    ('Proper Logout ', async t => {
        await Login.enterLogin(process.env.USERNAME_STANDARD, process.env.PASSWORD)
        await Navbar.logoutClick()
        await t.expect(Login.loginButton.exists).ok("Unsuccessful logout.")

    });