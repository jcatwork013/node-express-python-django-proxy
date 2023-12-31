const sqlite3 = require('sqlite3').verbose();

const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`;

const createProductTableQuery = `
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL
  );
`;

const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run(createUserTableQuery);
  db.run(createProductTableQuery);
});

db.close();
