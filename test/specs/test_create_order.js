const Page = require('./../pageobjects/pages');


describe('Product page', async() => {
    it('Create the new order.', async() => {

        const myOrder = ["Jade Yoga Jacket", "64.00", "2"];
        
        await Page.Home.open();

        await Page.Search.searchProducts("jackets");

        await Page.Search.chooseItem(myOrder[0]);

        await Page.Product.chooseSizeXL();

        await Page.Product.chooseColorGrey();

        await Page.Product.typeQuantity("2");

        await Page.Product.addToCard();

        await Page.Home.checkBasket();

        await Page.Shipping.fillShippingPageWithFakeData();

        await Page.Shipping.nextPage();

        await Page.Shipping.orderSummary(myOrder[0], myOrder[1], myOrder[2]);

        await Page.Shipping.placeOrder();

        await Page.Shipping.checkOrderInfo();
        
    });
}); 