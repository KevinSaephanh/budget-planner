const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: String, required: true }
});

module.exports = ItemSchema;
