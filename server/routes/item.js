const path = require('path');

const express = require('express');

const itemController = require('../controllers/item');

const router = express.Router();


// /admin/products => GET
router.get('/', itemController.getItems);

// /admin/add-product => POST
router.post('/add-item', itemController.postAddItem);


router.post('/update-item/:id', itemController.postEditItem)




module.exports = router;



