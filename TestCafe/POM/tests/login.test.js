import Login from '../pages/login-page'
import Navbar from '../pages/navbar-page'
import dotenv from 'dotenv'
import { URLS } from '../data/constants'

dotenv.config()

fixture `Login Feature Tests`
    .page `${URLS.HOME_URL}`;

test
    ('Standard user login ', async t => {
        await Login.enterLogin(process.env.USERNAME_STANDARD, process.env.PASSWORD)
        await t.expect(Navbar.logout.exists).ok("Login Test Failed: logout option unidentified.")
    });

test
    ('Invalid user login ', async t => {
        await Login.enterLogin(process.env.USERNAME_LOCKED, process.env.PASSWORD)
        await t.expect(Login.loginError.innerText).contains('Epic sadface', 'Login Test Failed: invalid user during login.')
    });