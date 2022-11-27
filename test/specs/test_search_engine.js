const Page = require('./../pageobjects/pages');


describe('Search Page', async() => {
    it('Search items and compare them with a list.', async() => {

        const itemsExpected = ["Leah Yoga Top", "Primo Endurance Tank", "Bardot Capri", "Carina Basic Capri"].sort();
        
        await Page.Home.open();

        await Page.Search.searchProducts("tops");

        await Page.Search.compareProducts(itemsExpected);

    });
});