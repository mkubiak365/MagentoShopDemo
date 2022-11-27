const Page = require('../pageobjects/pages');


describe('Home page', async() => {
    it('Check title and categories.', async() => {

        await Page.Home.open();
        
        await Page.Home.checkTitle();

        await Page.Home.checkCategoryNames();

        await Page.Home.checkWomenCategory();

        await Page.Home.checkMenCategory();

        await Page.Home.checkGearCategory();

        await Page.Home.checkTrainingCategory();

    });
});