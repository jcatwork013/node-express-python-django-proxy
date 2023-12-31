const express = require('express');
const bodyParser = require('body-parser');

// Import routes
const userRoutes = require('./modules/user/routes/userRoutes');
const productRoutes = require('./modules/product/routes/productRoutes');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Use routes
app.use('/api/v1', userRoutes);
app.use('/api/v1', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
