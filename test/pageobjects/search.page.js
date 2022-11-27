const expect = require('chai').expect; 


class SearchPage {

    get searchField() { return $('#search') };
    get productItem() { return $('//ol[@class="products list items product-items"]') }; 

    async searchProducts(product) {
        await this.searchField.setValue(product);     
        await browser.keys("\uE007"); 
    };

    async compareProducts(itemsExpected) {
        const itemsActual = [];
        await this.productItem.$$('.product-item-link').map(async element => {
            itemsActual.push(await element.getText());
        });
        expect(itemsActual.sort()).to.be.eql(itemsExpected);
    };

    async chooseItem(productName) {
        await $(`//*[contains(text(), "${productName}")]`).click();
    };
    
};

module.exports = new SearchPage();