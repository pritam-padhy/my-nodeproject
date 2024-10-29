
const products = require('./products');

let getProducts = function (req, res) {
    res.status(200).json(products)
}

let getProductById = function (req, res) {
    const productId = +req.params.id;
    const product = products.find(emp => products.id === productId);
    res.json(product);
}

module.exports = { getProducts, getProductById };