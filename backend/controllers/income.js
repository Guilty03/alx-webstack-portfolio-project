const IncomeSchema = require("../models/IncomeModel")


exports.addIncome = async(req, res) => {
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
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

        await income.save()
        res.status(200).json({message: 'Income added!'})
    } catch (error) {
        console.error('Error details:', error); // Log detailed error
        res.status(500).json({ message: 'An error occurred while adding income!' })
    }

    console.log(income)
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    console.log(req.params);
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Item Deleted!'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })
}