import React from "react"
import Button from "../Button"
import MathJaxComponent from "../MathJax"

export default function Question_Button({question, handleClick, id}){




    return(
        <div className="Question_Button">
        <Button handleClick={handleClick}>New Question</Button>
        <div className="QuestionFromButton">
        {<MathJaxComponent mathExpression={question} key = {id} />}
        </div>
        </div>
    )



}