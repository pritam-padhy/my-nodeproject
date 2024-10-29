exports.getProducts = (req, res)=>{
    res.json(products);
}

exports.getProductById = (req, res) =>{
    const productId = +req.params.id;
    const product = products.find(product=> product.id === productId);
    res.json(products);
}