const express = require('express');
const { getProducts, getProductById } = require('../controllers/product-controller');

const productRouter = require.Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);

module.exports = productRouter;
