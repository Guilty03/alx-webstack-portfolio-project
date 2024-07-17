const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 200
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
    maxLength: 20
  },
  type: {
    type: String,
    default: "Expense"
  },
  date: {
    type: Date,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
    maxLength: 200
  },
}, {timestamps: true});

module.exports = mongoose.model('Expense', ExpenseSchema);
