import Login from 'page_model/Login'
import Navbar from 'page_model/Navbar'
import dotenv from 'dotenv'
dotenv.config()

fixture `Login Feature Tests`
    .page `https://www.saucedemo.com/`;

test
    ('Standard user login ', async t => {
        console.log("entro a la prueba");
        await Login.enterLogin(process.env.USERNAME_STANDARD, process.env.PASSWORD)
        await t.expect(Navbar.logout.exists).ok("Login Test Failed: logout option unidentified.")
    });

test
    ('Invalid user login ', async t => {
        await Login.enterLogin(process.env.USERNAME_LOCKED, process.env.PASSWORD)
        await t.expect(Login.loginError.innerText).contains('Epic sadface', 'Login Test Failed: invalid user during login.')
    });