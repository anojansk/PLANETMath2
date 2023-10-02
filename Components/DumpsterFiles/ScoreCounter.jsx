import React from "react"



export default function ScoreCounter({correctBoolean}){
    const [nrCorrectAnswers, setNrCorrectAnswer] = React.useState(0)
    const [nrQuestions, setNrQuestions] = React.useState(0)

    if(correctBoolean){
        setNrCorrectAnswer((prevValue) => prevValue+1)
        setNrQuestions((prevValue) => prevValue+1)
    }
    else{
        setNrQuestions((prevValue) => prevValue+1)
    }

    return(
        null
    )
}