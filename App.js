import React, { useState } from 'react'
import Question from 'question'
import budget from 'Budget'

const App = (props) => {

    const [showPiece, setPiece] = useState(0)
    const questions = questionsList.questions
    const questionElements = questions.map(question => <Question key ={questionElements.length} question = {question}/>)
    let phase = 0;
    const questionPhase = () => {
        /*changes phases through 1,2,3 then 0 */   
        switch(phase){

            case phase < 3:
                phase = phase+1
                break;
            case 3:
                phase = 0
        }
    }

    return (
        <div>)
            <h3> Please answer the following questions</h3>
            <div>
                <ul>
                    {questionElements.filter(question => question.phase = phase)}
                </ul>

            </div>
        </div>
    )
}
