import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import { useGlobalContext } from '../../context/GlobalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const { incomes, expenses } = useGlobalContext()

    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: incomes.map(income => income.amount),
                backgroundColor: 'green',
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'Expenses',
                data: expenses.map(expense => expense.amount),
                backgroundColor: 'red',
                borderColor: 'red',
                fill: false,
            }
        ]
    }

    const options = {
        maintainAspectRatio: false, 
        responsive: true,
    }

    return (
        <div className='main_chart'>
            <Line data={data} options={options} />
        </div>
    )
}

export default Chart
