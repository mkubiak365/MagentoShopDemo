const config = require('./../config');
const expect = require('chai').expect; 


class HomePage {

    get whatsNewCat() { return $('#ui-id-3') };
    get womenCat() { return $('#ui-id-4') };
    get menCat() { return $('#ui-id-5') };
    get gearCat() { return $('#ui-id-6') };
    get trainingCat() { return $('#ui-id-7') };
    get saleCat() { return $('#ui-id-8') };
    get topsWomenCat() { return $('#ui-id-9') };
    get bottomsWomenCat() { return $('#ui-id-10') };
    get jacketsWomenCat() { return $('#ui-id-11') };
    get hoodiesWomenCat() { return $('#ui-id-12') };
    get teesWomenCat() { return $('#ui-id-13') };
    get brasWomenCat() { return $('#ui-id-14') };
    get pantsWomenCat() { return $('#ui-id-15') };
    get shortsWomenCat() { return $('#ui-id-16') };
    get topsMenCat() { return $('#ui-id-17') };
    get bottomsMenCat() { return $('#ui-id-18') };
    get jacketsMenCat() { return $('#ui-id-19') };
    get hoodiesMenCat() { return $('#ui-id-20') };
    get teesMenCat() { return $('#ui-id-21') };
    get tanksMenCat() { return $('#ui-id-22') };
    get pantsMenCat() { return $('#ui-id-23') };
    get shortsMenCat() { return $('#ui-id-24') };
    get bagsCat() { return $('#ui-id-25') };
    get fitnessCat() { return $('#ui-id-26') };
    get watchesCat() { return $('#ui-id-27') };
    get videoCat() { return $('#ui-id-28') };
    get createAccountButton() { return $('*//a[normalize-space()="Create an Account"]') };
    get loginUser() { return $('/html/body/div[2]/header/div[1]/div/ul/li[1]/span') };
    get basketButton() { return $('//span[@class="counter qty"]') };
    get proceedButton() { return $('#top-cart-btn-checkout') };

    
    async open() {
        await browser.setWindowSize(1920, 1080);
        return browser.url(config.browserURL);
    };

    async checkTitle() {
        expect(await browser.getTitle()).to.contain("Home Page - Magento eCommerce - website to practice selenium")
    };

    async checkCategoryNames() {
        const categoriesList = ["What's New", "Women", "Men", "Gear", "Training", "Sale"];
        expect(await this.whatsNewCat.getText()).to.be.eql(categoriesList[0]);
        expect(await this.womenCat.getText()).to.be.eql(categoriesList[1]);
        expect(await this.menCat.getText()).to.be.eql(categoriesList[2]);
        expect(await this.gearCat.getText()).to.be.eql(categoriesList[3]);
        expect(await this.trainingCat.getText()).to.be.eql(categoriesList[4]);
        expect(await this.saleCat.getText()).to.be.eql(categoriesList[5]); 
    };

    async checkWomenCategory() {
        const womenCat = ["Tops", "Jackets", "Hoodies & Sweatshirts", "Tees", "Bras & Tanks", "Bottoms", "Pants", "Shorts"];
        await this.womenCat.moveTo();
        expect(await this.topsWomenCat.getText()).to.be.eql(womenCat[0]);
        expect(await this.bottomsWomenCat.getText()).to.be.eql(womenCat[5]);
        await this.topsWomenCat.moveTo();
        expect(await this.jacketsWomenCat.getText()).to.be.eql(womenCat[1]);
        expect(await this.hoodiesWomenCat.getText()).to.be.eql(womenCat[2]);
        expect(await this.teesWomenCat.getText()).to.be.eql(womenCat[3]);
        expect(await this.brasWomenCat.getText()).to.be.eql(womenCat[4]);
        await this.bottomsWomenCat.moveTo();
        expect(await this.pantsWomenCat.getText()).to.be.eql(womenCat[6]);
        expect(await this.shortsWomenCat.getText()).to.be.eql(womenCat[7]);
    };

    async checkMenCategory() {
        const menCat = ["Tops", "Jackets", "Hoodies & Sweatshirts", "Tees", "Tanks", "Bottoms", "Pants", "Shorts"];
        await this.menCat.moveTo();
        expect(await this.topsMenCat.getText()).to.be.eql(menCat[0]);
        expect(await this.bottomsMenCat.getText()).to.be.eql(menCat[5]);
        await this.topsMenCat.moveTo();
        expect(await this.jacketsMenCat.getText()).to.be.eql(menCat[1]);
        expect(await this.hoodiesMenCat.getText()).to.be.eql(menCat[2]);
        expect(await this.teesMenCat.getText()).to.be.eql(menCat[3]);
        expect(await this.tanksMenCat.getText()).to.be.eql(menCat[4]);
        await this.bottomsMenCat.moveTo();
        expect(await this.pantsMenCat.getText()).to.be.eql(menCat[6]);
        expect(await this.shortsMenCat.getText()).to.be.eql(menCat[7]);
    };

    async checkGearCategory() {
        const gearCat = ["Bags", "Fitness Equipment", "Watches"];
        await this.gearCat.moveTo();
        expect(await this.bagsCat.getText()).to.be.eql(gearCat[0]);
        expect(await this.fitnessCat.getText()).to.be.eql(gearCat[1]);
        expect(await this.watchesCat.getText()).to.be.eql(gearCat[2]);
    };

    async checkTrainingCategory() {
        const trainingCat = ["Video Download"];
        await this.trainingCat.moveTo();
        expect(await this.videoCat.getText()).to.be.eql(trainingCat[0]);
    };

    async openRegisterForm() {
        this.createAccountButton.click();
    };

    async checkLoginUser(firstName, lastName) {
        const activeUser = await this.loginUser.getText();
        expect(activeUser).to.be.eql(`Welcome, ${firstName} ${lastName}!`);
    };

    async checkBasket() {
        await this.basketButton.click();
        await this.proceedButton.click();
    };

};

module.exports = new HomePage();