// Import the ExpenseSchema from the ExpenseModel file
const ExpenseSchema = require("../models/ExpenseModel")

// Export the addExpense function
exports.addExpense = async(req, res) => {
    const {title, amount, category, description, date} = req.body

    // Create a new expense object using the ExpenseSchema
    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
    
    try {
        // Perform validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({message: 'All fields must be filled in!'})
        }

        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: 'Amount must be greater than 0!'})
        }

        await expense.save()
        res.status(200).json({message: 'Expense added!'})
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: 'An error occurred while adding expense!' })
    }

    console.log(expense)
}

// Export the getExpense function
exports.getExpense = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch {
        res.status(500).json({message: 'Server Error'})
    }
}

// Export the deleteExpense function
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