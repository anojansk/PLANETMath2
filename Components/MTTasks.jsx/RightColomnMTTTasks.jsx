import React from "react"
import Button from "../Button"
import ChooseOption from "./ChooseOption"
import MathJaxComponent from "../MathJax"


export default function RightColomnMTT({TasksFromDataSet, categoryFromRB, handleAnswer}){

const [arrayWithQuestions, setArrayWithQuestions] = React.useState([])
const [taskObject, setTaskObject] = React.useState({
    id : null,
    category : "",
    question : "",
    options : [],
    correct : ""
})
const [nrCorrectAnswers, setNrCorrectAnswer] = React.useState(0)
const [nrQuestions, setNrQuestions] = React.useState(-1)
const [chosenAnswer, setChosenAnswer] = React.useState("")
const [clickedCheckAnswer, setClickedCheckAnswer] = React.useState(false)


React.useEffect(() =>{
    const filteredQuestions = TasksFromDataSet.Tasks.filter((tasks) =>{
        return tasks.category == categoryFromRB})
    setArrayWithQuestions(filteredQuestions)
    setNrQuestions(-1)
    setNrCorrectAnswer(-1)
    setTaskObject(() => {

        return {
            id : null,
            category : "",
            question : "",
            options : [],
            correct : ""
        }


    })
    },[categoryFromRB])

        
    function handleChange(event){
        setChosenAnswer(event.target.value)
    }


    function checkAnswer(){
      setClickedCheckAnswer((prevState => !prevState))
    }



    function NewQuestionClick(){
        setTaskObject(() => {
            if(arrayWithQuestions.length > 0){
                const randomNumber = Math.floor(Math.random() * arrayWithQuestions.length)
                const chosenElement = arrayWithQuestions[randomNumber]
                
                //Chose Random question from arrayWithQuestions //Object'

                return {
                    id : chosenElement.id ,
                    category : chosenElement.category,
                    question : chosenElement.question,
                    options : chosenElement.options,
                    correct : chosenElement.correct
                }
            }
        })
        setArrayWithQuestions((prevArray) =>{
            return prevArray.filter( e => e.question !== taskObject.question)
            
        })

        if(taskObject.correct == chosenAnswer){
            setNrCorrectAnswer((prevValue) => prevValue+1)
            setNrQuestions((prevValue) => prevValue+1)
        }
        else{
            setNrQuestions((prevValue) => prevValue+1)
        }

        setClickedCheckAnswer(false);
    }   



    return(
        <div className="QuestionOptionsSection"style={{display: "inline"}}>
        {arrayWithQuestions.length == 0 ? <h3>No more question try another category</h3>
        :
        <>

        <div className="TextAboveOptions">
            {clickedCheckAnswer ? 
                    (chosenAnswer == taskObject.correct ?
                        <h3 style={{color:"green"}}>That is correct</h3> 
                    :   <h3 style={{color:"red"}}>That is wrong</h3> ) 
                : <h4><MathJaxComponent mathExpression={taskObject.question} /></h4>}
        </div>
        
       <ChooseOption 
            handleChange={handleChange}
            listOfOptions={taskObject.options}
            chosenAnswer={chosenAnswer}
        /> 
        <Button handleClick={NewQuestionClick} > New Question </Button>
        <Button handleClick={checkAnswer} > {clickedCheckAnswer ? "Show Question" : "Check Answer" }</Button>
        {nrQuestions == -1 ? 
            null : <h3>{nrCorrectAnswers} / {nrQuestions}</h3>}
        </>
        }
        
        </div>
    )
}