const express = require('express');
const app = express();
const sequelize = require('./config/database');
const { User, Product, Cart, CartItem } = require('./models');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

app.use(express.json());

// Route registration
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Home route
app.get('/', (req, res) => res.send('E-Commerce Backend Running'));

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch((err) => {
  console.error('Failed to sync database:', err);
  process.exit(1);
});
