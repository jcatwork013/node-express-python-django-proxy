const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

class ProductModel {
  constructor() {
    this.db = db;
  }
  
  getAllProducts(callback) {
    const query = 'SELECT * FROM products';
    this.db.all(query, [], callback);
  }
}

module.exports = ProductModel;
