const Item= require('../models/item');



exports.postAddItem = (req, res, next) => {
    const item_name = req.body.item_name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;
    Item.create({
        item_name: item_name,
        price: price,
        imageUrl: imageUrl,
        description: description,

    }).then((result) => {
        console.log("Created Product")
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })

};



// todo 
exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title
    const updatedPrice = req.body.price
    const updatedImageUrl = req.body.imageUrl
    const updatedDesc = req.body.description
    Product.findByPk(prodId).then((product) => {
        product.title = updatedTitle
        product.price = updatedPrice
        product.imageUrl = updatedImageUrl
        product.description = updatedDesc
        return product.save();
    }).then((result) => {
        console.log("Updated")
        res.redirect('/admin/products');
    }).catch((err) => {
        console.log(err)
    })


}

//  todo
exports.getItems = (req, res, next) => {
    req.user.getItems().then((rows) => {
    res.send(rows)

    }).catch((err) => {
        console.log(err)
    })
};
