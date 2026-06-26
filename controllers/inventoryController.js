const Inventory = require('../models/Inventory');

/* =========================
   GET ALL INVENTORY
========================= */
exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    console.error('Fetch Inventory Error:', error);

    res.status(500).json({
      message: error.message
    });
  }
};

/* =========================
   ADD NEW INVENTORY
========================= */
exports.addInventory = async (req, res) => {
  try {
    console.log('Incoming Inventory Data:', req.body);

    const newItem = new Inventory(req.body);
    const savedItem = await newItem.save();

    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Backend Add Inventory Error:', error);

    res.status(400).json({
      message: error.message
    });
  }
};

/* =========================
   DELETE INVENTORY
========================= */
exports.deleteInventory = async (req, res) => {
  try {
    const deletedItem = await Inventory.findByIdAndDelete(
      req.params.id
    );

    if (!deletedItem) {
      return res.status(404).json({
        message: 'Inventory item not found'
      });
    }

    res.json({
      message: 'Inventory deleted successfully'
    });
  } catch (error) {
    console.error('Delete Inventory Error:', error);

    res.status(500).json({
      message: error.message
    });
  }
};

/* =========================
   UPDATE INVENTORY
========================= */
exports.updateInventory = async (req, res) => {
  try {
    console.log(
      'Updating Inventory:',
      req.params.id,
      req.body
    );

    const updatedItem = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedItem) {
      return res.status(404).json({
        message: 'Inventory item not found'
      });
    }

    res.json(updatedItem);
  } catch (error) {
    console.error('Update Inventory Error:', error);

    res.status(400).json({
      message: error.message
    });
  }
};