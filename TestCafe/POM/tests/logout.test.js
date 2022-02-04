import Login from '../pages/login-page'
import Navbar from '../pages/navbar-page'
import dotenv from 'dotenv'
import { URLS } from '../data/constants'
dotenv.config()

fixture `Logout Feature Tests`
    .page `${URLS.HOME_URL}`;

test
    ('Proper Logout ', async t => {
        await Login.enterLogin(process.env.USERNAME_STANDARD, process.env.PASSWORD)
        await Navbar.logoutClick()
        await t.expect(Login.loginButton.exists).ok("Unsuccessful logout.")

    });