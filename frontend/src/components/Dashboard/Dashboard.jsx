import React, { useEffect } from 'react'
import './Dashboard.css'
import { useGlobalContext } from '../../context/GlobalContext';
import History from '../../History/History';
import "../../App.css"
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <div>
            <div className='Inner_layout'>
               
                <div className="stats-con">
                    <div className="chart-con">
                    <div className="amount-con">
                            <div className="income">
                                <h3>Total Income</h3>
                                <p>
                                    $ {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h3>Total Expense</h3>
                                <p>
                                    $ {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h3>Total Balance</h3>
                                <p>
                                    $ {totalBalance()}
                                </p>
                            </div>
                        </div>
                        
                        <div className="history-con">
                        
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                        
                    </div>
                    <div className="history-con">
                        <History />
                        <h1>All Transactions</h1>
                        <Chart/>
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}
;

export default Dashboard