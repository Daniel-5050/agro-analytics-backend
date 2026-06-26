const express = require('express');
const router = express.Router();

const {
  getInventory,
  addInventory,
  deleteInventory,
  updateInventory
} = require('../controllers/inventoryController');

/* =========================
   GET ALL INVENTORY
========================= */
router.get('/', getInventory);

/* =========================
   ADD NEW INVENTORY
========================= */
router.post('/', addInventory);

/* =========================
   DELETE INVENTORY BY ID
========================= */
router.delete('/:id', deleteInventory);

/* =========================
   UPDATE INVENTORY BY ID
========================= */
router.put('/:id', updateInventory);

module.exports = router;