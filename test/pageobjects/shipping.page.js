const {faker} = require('@faker-js/faker');
const expect = require('chai').expect; 


class ShippingPage {

    get firstNameField() { return $('//div[@name="shippingAddress.firstname"]//div[@class="control"]//input[@class="input-text"]') };
    get lastNameField() { return $('//div[@name="shippingAddress.lastname"]//div[@class="control"]//input[@class="input-text"]') };
    get companyField() { return $('//div[@name="shippingAddress.company"]//div[@class="control"]//input[@class="input-text"]') };
    get streetAddressField() { return $('//div[@name="shippingAddress.street.0"]//div[@class="control"]//input[@class="input-text"]') };
    get cityField() { return $('//div[@name="shippingAddress.city"]//div[@class="control"]//input[@class="input-text"]') };
    get stateField() { return $('//div[@name="shippingAddress.region_id"]//div[@class="control"]//select[@class="select"]') };
    get zipCodeField() { return $('//div[@name="shippingAddress.postcode"]//div[@class="control"]//input[@class="input-text"]') };
    get countryField() { return $('//div[@name="shippingAddress.country_id"]//div[@class="control"]//select[@class="select"]') };
    get phoneNumberField() { return $('//div[@name="shippingAddress.telephone"]//div[@class="control _with-tooltip"]//input[@class="input-text"]') };
    get shippingMethods() { return $('//input[@name="ko_unique_1"]') };
    get nextButton() { return $('//span[normalize-space()="Next"]') };
    get priceFromOrder() { return $('//strong//span[@class="price"]') };
    get productFromOrder() { return $('//strong[@class="product-item-name"]') };
    get qtyFromOrder() { return $('//span[@data-bind="text: getCartSummaryItemsCount()"]') };
    get placeOrderButton() { return $('//button[@title="Place Order"]') };
    get infoAboutPurchase() { return $('//span[@class="base"]') };
    get orderNumber() { return $('//a[@class="order-number"]') };


    async fillShippingPageWithFakeData() {
        //await this.firstNameField.setValue( faker.name.firstName());
        //await this.lastNameField.setValue(faker.name.lastName());
        await this.companyField.setValue(faker.company.name());
        await this.streetAddressField.setValue(faker.address.streetAddress());
        await this.cityField.setValue(faker.address.city());
        await this.stateField.selectByVisibleText(faker.address.state());
        await this.zipCodeField.setValue(faker.address.zipCodeByState());
        await this.countryField.selectByVisibleText("United States");
        await this.phoneNumberField.setValue(faker.phone.number());
        await this.shippingMethods.click();
    };

    async nextPage() {
        await this.nextButton.click();
        await browser.pause(2000);
    };

    async orderSummary(expectedProduct, expectedPrice, expectedQty) {
        await this.qtyFromOrder.click();
        const actualProduct = await this.productFromOrder.getText();
        expect(actualProduct).to.be.eql(expectedProduct);
        const actualPrice = await this.priceFromOrder.getText();
        expect(actualPrice).to.be.eql("$" + expectedPrice);
        const actualQty = await this.qtyFromOrder.getText();
        expect(actualQty).to.be.eql(expectedQty);
    };

    async placeOrder() {
        await this.placeOrderButton.click();
        await browser.pause(2000);
    };

    async checkOrderInfo() {
        const orderInfo = await this.orderNumber.getText();
        expect(parseInt(orderInfo)).to.be.above(0);
        const transactionInfo = await this.infoAboutPurchase.getText();
        expect(transactionInfo).to.be.eql("Thank you for your purchase!");
    };

}

module.exports = new ShippingPage();