import React, { useEffect, useState } from 'react';
import './Income.css';
import '../../App.css';
import { useGlobalContext } from '../../context/GlobalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItems/IncomeItems';

function Income() {
    const { addIncome, incomes, getIncomes, deleteIncome, totalIncome, editIncome } = useGlobalContext();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        getIncomes();
    }, []);

    const handleAddIncome = async (income) => {
        await addIncome(income);
        setShowSuccessMessage(true); 
        setTimeout(() => setShowSuccessMessage(false), 3000); 
    };

    return (
        <div className='main_container'>
            <div className='Inner_layout'>
                <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form isIncome={true} />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const { _id, title, amount, date, category, description, type } = income;
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type={type}
                                    category={category}
                                    indicatorColor="var(--color-green)"
                                    deleteItem={deleteIncome}
                                />
                            );
                        })}
                        {showSuccessMessage && (
                            <div className="success-message">
                                Successfully added <span>&#10004;</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Income;
