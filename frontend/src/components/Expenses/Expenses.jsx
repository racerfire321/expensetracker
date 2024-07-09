import React, { useEffect } from 'react'

import { useGlobalContext } from '../../context/GlobalContext';
import './Expense.css'
import '../../App.css'
import Form from '../Form/Form';
import IncomeItem from '../IncomeItems/IncomeItems';
import ExpenseForm from '../Expenses/Form/ExpenseForm';

function Expenses() {
    const {addIncome,expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [])
    return (
        <main className='main_container'>
            <div className='Inner_layout'>
               
                <h2 className="total-expense">Total Expense: <span>${totalExpenses()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="incomes">
                        {expenses.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            console.log(income)
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Expenses