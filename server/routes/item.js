const path = require('path');

const express = require('express');

const itemController = require('../controllers/item');

const router = express.Router();


// /admin/products => GET
router.get('/', itemController.getProducts);

// /admin/add-product => POST
router.post('/add-item', itemController.postAddProduct);


router.post('/update-item', itemController.postEditProduct)




module.exports = router;
