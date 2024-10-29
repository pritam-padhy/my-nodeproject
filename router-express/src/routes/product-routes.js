const express = require('express');

const productRouter = express.Router();
const { getProducts, getProductById } = require('../controller/product-controller');

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);


module.exports = productRouter;