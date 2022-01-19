import Budget from "./Budget.js"
import questions from "./questionsList.js"

//first thing is to get the budget prop


var thisBudget = {}

export const budgetToDisplay = (props) => {
    thisBudget = props;
    displayBudget();
}


 export const displayBudget = () => {

    return (

        <ol>
            <li>Your total income is: {thisBudget.returnIncome}</li>
            <li>Your total expenses are: {thisBudget.returnExpenses}</li>
            <li>Your total spending money is: {thisBudget.freeSpend}</li>
        </ol>


    )  
 }
