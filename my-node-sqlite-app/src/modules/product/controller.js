const ProductModel = require('./model');

class ProductController {
  constructor() {
    this.productModel = new ProductModel();
  }

  getAllProducts(req, res) {
    this.productModel.getAllProducts((err, data) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(data);
    });
  }
}

module.exports = ProductController;
