import React, { useState } from 'react'
/*import Question from './question.js' */
import Budget from './Budget.js'
import questions from './questionsList.js'



const App = (props) =>{

    const [attribute, setAttribute] = useState({})
    const[phase, setPhase] = useState(0)

    const addToBudget = () =>{

        Budget(attribute);

    }
    const questionPhase = () => {
          
            if (phase < 3){
                setPhase(phase +1);
          
            }
                
            else if(phase === 3){
                setPhase(0);
                addToBudget(attribute);              
            }
            console.log(phase);
             
    }

    const handleInput = (event) => {
        const value = event.target.value;
        console.log('valued!')
        setAttribute({
            ...attribute,
            [event.target.question]: value
        })

    }

    const questionToDisplay = questions.filter(question => question.phase === phase)

    return (
        <div>
            <h3> Please answer some questions to start</h3>
            {questionToDisplay.map(question => <h4> {question.script} </h4>)}

            <ul>
                {questionToDisplay.map(question =>
                    <li><label> {question.script} 
                    <input type="text"
                    question = {question.attribute}
                    value = "0"
                    onChange={handleInput}
                    />
                    </label></li>)}  
            </ul>
            
            {console.log(questionToDisplay.map(question => question.script))}

            <button onClick={questionPhase}> {phase === 3 ? 'Submit' : 'Next'} </button>
        </div>
    )
}

export default App
