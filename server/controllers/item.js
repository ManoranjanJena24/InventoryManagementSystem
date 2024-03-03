const Item= require('../models/item');



exports.postAddItem = (req, res, next) => {
    const item_name = req.body.item_name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;
    Item.create({
        item_name: item_name,
        description: description,
        price: price,
        quantity: quantity,

    }).then((result) => {
        console.log("Created Product")
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })

};



exports.postEditItem = (req, res, next) => {
    console.log('Inside Edit')
    const id = req.body.id;
    const updatedQuantity = req.body.quantity
    Item.findByPk(id).then((item) => {
        item.tem_name = req.body.item_name
        item.description = req.body.description
        item.price = req.body.price
        item.quantity = updatedQuantity
        return item.save();
    }).then((result) => {
        console.log("Updated")
        res.send('Updated successfully!')
    }).catch((err) => {
        console.log(err)
    })


}

//  changed
exports.getItems = (req, res, next) => {
    console.log('Inside Get Items')
    Item.findAll().then((items) => {
        console.log("fetched Items")
        res.json(items)
    }).catch((err) => {
        console.log(err)
    })
};