const { addExpense, getExpense, deleteExpense,editExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome,editIncome } = require('../controllers/income');

const router = require('express').Router();


router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .put('/edit/:id', editIncome)
    .put('/editExpense/:id', editExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router
