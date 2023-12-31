const sqlite3 = require('sqlite3').verbose();
const currentDate = new Date();

const seedUserDataQuery = `
  INSERT INTO users (name, createdAt, updatedAt) VALUES
    ('Johnny Pham', '${currentDate}', '${currentDate}'),
    ('Tommy Ngo', '${currentDate}', '${currentDate}'),
    ('Alice Dang', '${currentDate}', '${currentDate}'),
    ('Bob Nguyen', '${currentDate}', '${currentDate}');
`;

const seedProductDataQuery = `
  INSERT INTO products (name, price) VALUES
    ('Product A', 20),
    ('Product B', 30),
    ('Product C', 15),
    ('Product D', 25);
`;

const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run(seedUserDataQuery);
  db.run(seedProductDataQuery);
});

db.close();
