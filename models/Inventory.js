const mongoose = require('mongoose');

console.log('CORRECT INVENTORY MODEL LOADED');

const inventorySchema = new mongoose.Schema({
  cropName: {
    type: String,
    required: true,
    trim: true
  },

  quantity: {
    type: Number,
    required: true,
    min: 0
  },

  unit: {
    type: String,
    default: 'tons'
  },

  marketPrice: {
    type: Number,
    required: true,
    min: 0
  },

  estimatedValue: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

/* =========================
   AUTO CALCULATE VALUE
========================= */
inventorySchema.pre('save', function() {
  this.estimatedValue =
    this.quantity * this.marketPrice;
});

/* =========================
   AUTO CALCULATE ON UPDATE
========================= */
inventorySchema.pre('findOneAndUpdate', function() {
  const update = this.getUpdate();

  if (
    update &&
    update.quantity !== undefined &&
    update.marketPrice !== undefined
  ) {
    update.estimatedValue =
      update.quantity * update.marketPrice;
  }
});

module.exports = mongoose.model(
  'Inventory',
  inventorySchema
);