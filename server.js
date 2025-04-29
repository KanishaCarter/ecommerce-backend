const express = require('express');
const app = express();
const sequelize = require('./config/database');
const { User, Product, Cart, CartItem } = require('./models');
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => res.send('E-Commerce Backend Running'));

// Syncs DB and starts server
sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
