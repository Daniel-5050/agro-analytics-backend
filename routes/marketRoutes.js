const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { crop: 'Maize', price: 250000 },
    { crop: 'Rice', price: 400000 },
    { crop: 'Soybeans', price: 320000 }
  ]);
});

module.exports = router;