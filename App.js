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
                
            else if(phase == 3){
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

    return (
        <div>
            <h3> Please answer some questions to start</h3>
            <ul>
                {questions.filter(question => question.phase === phase).map(question =>
                    { < label > {question.script} 
                    <input type="text"
                    question = {question.attribute}
                    value={question.attribute}
                    onChange={handleInput}
                    />
                    </label>})}
            </ul>
            <button onClick={questionPhase}> {phase === 3 ? 'Submit' : 'Next'} </button>
        </div>
    )
}

export default App
