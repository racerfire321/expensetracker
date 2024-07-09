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
        <div className='dashboard-main'>
            <div className='dashboard-container'>
                <div className='dashboard-section-one'>
                <div className="amount-con">
                            <div className="income">
                                <h3>💸Total Income</h3>
                                <p>
                                    $ {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h3>📈Total Expense</h3>
                                <p>
                                    $ {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h3>🏛️Total Balance</h3>
                                <p>
                                    $ {totalBalance()}
                                </p>
                            </div>
                        </div>
                        <div className="history-con">
                        
                        <h2 className="salary-title"><span>➖Min</span> Salary <span>Max➕</span></h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title"><span>➖Min</span>Expense<span>Max➕</span></h2>
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
                <div className='dashboard-second-two'>
                    
                <div className="history">
                        <History />
                        </div>

                    <div className='chart-container'>
                        
                    <h1>All Transactions</h1>
                   
                        <Chart/>
                        
                           
                    </div>
                </div>
            </div>
        </div>
       
    )
}
;

export default Dashboard