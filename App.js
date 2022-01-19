import React, { useState } from 'react'
/*import Question from './question.js' */
import Budget from './Budget.js'
import questions from './questionsList.js'
import {budgetToDisplay,displayBudget} from "./displayBudget.js"



const App = (props) =>{

    const [attribute, setAttribute] = useState({})
    const[phase, setPhase] = useState(0)

    const addToBudget = () =>{

        Budget(attribute);

    }
    const questionPhase = () => {
          
            if (phase < 4){
                setPhase(phase +1);
          
            }
                
            else if(phase === 4){
                setPhase(0);
                addToBudget(attribute);    
            }
             
    }

    const handleInput = (event) => {
        const value = event.target.value;
        console.log('valued!')
        console.log(value)
        setAttribute({
            ...attribute,
            [event.target.question]: value
        })

    }

    const questionToDisplay = questions.filter(question => question.phase === phase)

    return (
        <div>
            {//could possible swap this next part out for an array?
            }
            {phase === 0 ? <h3> Please answer some questions to start </h3>: ""}
            {questionToDisplay.map(question => <h4> {question.script} </h4>)}
            {phase === 3 ? <h3> Thank you! Your budget will display after clicking submit </h3>: ""}

            {questionToDisplay.map(question =>
                    <li><label>
                    <input type="text"
                    question = {question.attribute}
                    onChange={handleInput}
                    />
            </label></li>)}  

            {phase === 4 ? displayBudget.budgetToDisplay : "" }
            
            {console.log(questionToDisplay.map(question => question.script))}

            <button onClick={questionPhase}> {phase === 3 ? 'Submit' : 'Next'} </button>
        </div>
    )
}

export default App
