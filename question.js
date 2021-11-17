import React, { useState } from 'react'
import Budget from 'Budget'

const [attribute, setAttribute] = useState({})

const handleInput = (event) => {
        const value = event.target.value;

        setAttribute({...attribute,
            [event.target.question]: value
        })


        const addToBudget = (event, budgetQues, value) => {

            event.preventDefault()
                /* line below should map the dictionary of attributes to budget attributes*/
            Object.entries(attribute).map(([key, value]) => Budget.budget)

        }

        const Question = ({ question }) => {

                return ( < label > { question } <
                    input type = "text"
                    question = { question }
                    value = { attribute.question }
                    onChange = { handleInput }
                    />     


                    <
                    /label>)

                }
