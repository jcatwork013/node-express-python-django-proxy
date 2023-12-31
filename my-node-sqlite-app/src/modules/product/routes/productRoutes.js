const express = require('express');
const ProductController = require('../controller');

const router = express.Router();
const productController = new ProductController();

router.get('/products', (req, res) => productController.getAllProducts(req, res));

module.exports = router;
