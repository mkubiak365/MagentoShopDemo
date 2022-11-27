const HomePage = require('./home.page');
const RegisterPage = require('./register.page');
const SearchPage = require('./search.page');
const ProductPage = require('./product.page');
const ShippingPage = require('./shipping.page');


class Pages {
    get Home() { return HomePage };
    get Register() { return RegisterPage };
    get Search() { return SearchPage };
    get Product() { return ProductPage };
    get Shipping() { return ShippingPage };
};

module.exports = new Pages();