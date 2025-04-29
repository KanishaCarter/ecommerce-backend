const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// Public: View all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({ status: 'success', data: products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Public: View one product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ status: 'success', data: product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

module.exports = router;
