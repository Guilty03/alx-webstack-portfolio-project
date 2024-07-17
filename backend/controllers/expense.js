const ExpenseSchema = require("../models/ExpenseModel")


exports.addExpense = async(req, res) => {
    const {title, amount, category, description, date} = req.body

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
    
    try {
        // validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({message: 'All fields must be filled in!'})
        }

        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: 'Amount must be greater than 0!'})
        }

        await expense.save()
        res.status(200).json({message: 'Expense added!'})
    } catch (error) {
        console.error('Error details:', error); // Log detailed error
        res.status(500).json({ message: 'An error occurred while adding expense!' })
    }

    console.log(expense)
}

exports.getExpense = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    console.log(req.params);
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({message: 'Item Deleted!'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })
}