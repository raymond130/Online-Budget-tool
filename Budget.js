import React from 'react'

const budget = {};
const Budget = (props) => {

    budget.income = props.income;
    budget.expenses = props.expenses;


}


const freeSpend = () => {
    const leftOver = budget.income - budget.expenses
    return leftOver;
}

const returnIncome = () => { return budget.income }

const returnBills = () => { return budget.bills }

export default freeSpend
