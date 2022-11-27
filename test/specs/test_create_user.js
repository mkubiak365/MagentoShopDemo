const Page = require('./../pageobjects/pages');


describe('Register Page', async() => {
    it('Create the new user.', async() => {

        await Page.Home.open();

        await Page.Home.openRegisterForm();

        const newUser = await Page.Register.fillFormWithFakeData();

        await Page.Register.acceptDataAndCreateAccount();

        await Page.Home.checkLoginUser(newUser[0], newUser[1]);

    });
});