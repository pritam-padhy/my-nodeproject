const express = require('express');
const products = require('./products.json');
const products_2 = require('./products_2.json');
const app = express();


app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const id = +req.params.id;
    const result = products.find(prod => prod.id === id);
    if (!result) {
        res.status(404).send('Product does not exist');
    }
    res.json(result);
});

app.get('/products/:prodId/reviews/:reviewId', (req, res) => {
    const { prodId, reviewId } = req.params;
    const singleProduct = products_2.find(prod => prod.id == prodId);
    if (singleProduct) {
        const review = singleProduct.reviews.find(review => review.id == reviewId);
        if (review) {
            res.json(review);
        } else {
            res.status(400).send('Product found but review does not exist');
        }
    } else {
        res.status(400).send('Product does not exist');
    }
});

app.get('/myProducts', (req, res) => {
    const { search, limit } = req.query;
    let filteredProducts = products;

    if(search){
        filteredProducts = filteredProducts.filter()
    }
});

app.get('*', (req, res) => {
    res.send('Sorry, This is an invalid URL');
});


app.listen(5000, () => {
    console.log('Server is running at PORT 5000');
});