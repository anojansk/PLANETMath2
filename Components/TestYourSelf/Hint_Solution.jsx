import React from "react"
import Button from "../Button"
import MathJaxComponent from "../MathJax"


export default function HintSolution({hint, answer, question, id}){

const [showHS, setShowHS] = React.useState(null)

    

    function clickHint(){
        setShowHS(hint)
    }
 
    function clickSolution(){
        setShowHS(answer)
    }

    React.useEffect(()=>{
        setShowHS("")
    }, [question])
/**
 * To make sure that hint/solution gets cleared when NewQuestion is clicked
 * Same in Input_Answer component
 */

    return(
        <div>
        <div className="HintSol_Comp">
            <Button handleClick={clickHint} className = "HintButton">Hint</Button>
            <Button handleClick={clickSolution} className = "SolutionButton">Solution</Button>
        </div>
            <div className="ShowHS">
            {<MathJaxComponent mathExpression={showHS} key ={showHS == answer ? id : id+1} />}
            </div>
    
        
        </div>
    )   
}

//We use id+1 so that Mathjax component rerenders when switching between hint and solution button.
