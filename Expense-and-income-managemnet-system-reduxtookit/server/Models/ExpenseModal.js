import  mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  income: {
    type: Number,
  },
  expense: {
    type: Number,
  },
  user: {
    type: String,
  }
}, {
  timestamps: true
});

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense
