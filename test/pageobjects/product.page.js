class ProductPage {

    get sizeXL() { return $('#option-label-size-143-item-170') };
    get colorGrey() { return $('#option-label-color-93-item-52') };
    get quantity() { return $('#qty') };
    get addToCardButton() { return $('#product-addtocart-button') };


    async chooseSizeXL() {
        await this.sizeXL.click();
    };

    async chooseColorGrey() {
        await this.colorGrey.click();
    };

    async typeQuantity(qty) {
        await this.quantity.setValue(qty);
    };

    async addToCard() {
        await this.addToCardButton.click();
        await browser.pause(2000);
    };

};

module.exports = new ProductPage();