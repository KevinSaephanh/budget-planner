const mongoose = require("mongoose");
const Item = require("./Item");
const Schema = mongoose.Schema;
const BudgetSchema = new Schema({
  title: { type: String, required: true },
  budget: { type: Number, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  items: [Item]
});

module.exports = mongoose.model("Budget", BudgetSchema);
