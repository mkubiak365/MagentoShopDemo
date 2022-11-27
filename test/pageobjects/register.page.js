const {faker} = require('@faker-js/faker');


class RegisterPage {

    get firstNameField() { return $('#firstname') };
    get lastNameField() { return $('#lastname') };
    get singUpCheckbox() { return $('#is_subscribed') };
    get emailAddressField() { return $('#email_address') };
    get passwordField() { return $('#password') };
    get confirmPasswordField() { return $('#password-confirmation') };
    get createAccountButton() { return $('//button[@title="Create an Account"]') };

    async fillFormWithFakeData() {
        const firstName = await faker.name.firstName();
        await this.firstNameField.setValue(firstName);
        const lastName = await faker.name.lastName();
        await this.lastNameField.setValue(lastName);
        await this.singUpCheckbox.click();
        await this.emailAddressField.setValue(await faker.internet.email());
        const password = await faker.internet.password();
        await this.passwordField.setValue(password);
        await this.confirmPasswordField.setValue(password);

        return [firstName, lastName];
    };

    async acceptDataAndCreateAccount() {
        await this.createAccountButton.click();
        await browser.pause(2000);
    };
    
};

module.exports = new RegisterPage();