const IncomeSchema= require("../models/IncomeModel")


exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date}  = req.body
    
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    
}

exports.getIncomes = async (req, res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}

exports.editIncome = async (req, res) => {
    const { id } = req.params; 
    const { title, amount, category, description, date } = req.body; 
   
    try {
        
        if (!title || !amount || !description ) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

       

        
        const updatedIncome = await IncomeSchema.findByIdAndUpdate(
            id,
            { title, amount, date, description },
            { new: true } 
        );

        
        if (!updatedIncome) {
            return res.status(404).json({ message: 'Income not found' });
        }

        res.status(200).json({ message: 'Income Updated', income: updatedIncome });
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
