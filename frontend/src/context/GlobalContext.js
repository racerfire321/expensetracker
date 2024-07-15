import React, { useContext, useState } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message);
            });
        getIncomes();
    };

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`);
        setIncomes(response.data);
        console.log(response.data);
    };

    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
        getIncomes();
    };

    const editIncome = async (id, updatedIncome) => {
        console.log(id , updatedIncome);
        try {
            const res = await axios.put(`${BASE_URL}edit/${id}`, updatedIncome, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.data); // Check the response
            getIncomes();
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    
    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
            .catch((err) =>{
                setError(err.response.data.message);
            });
        getExpenses();
    };

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`);
        setExpenses(response.data);
        console.log(response.data);
    };

    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
        getExpenses();
    };

    const editExpense = async (id, updatedExpense) => {
        console.log(id , updatedExpense);
        try {
            const res = await axios.put(`${BASE_URL}editExpense/${id}`, updatedExpense, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.data); // Check the response
            getExpenses();
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    
    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.amount;
        });
        return totalIncome;
    };

    const totalExpenses = () => {
        let totalExpenses = 0;
        expenses.forEach((expense) => {
            totalExpenses += expense.amount;
        });
        return totalExpenses;
    };

    const totalBalance = () => {
        return totalIncome() - totalExpenses();
    };

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        return history.slice(0, 3);
    };

    const viewHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        return history;
    };

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            editIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            editExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            viewHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

