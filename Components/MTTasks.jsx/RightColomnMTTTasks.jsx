import React from "react"
import Button from "../Button"
import ChooseOption from "./ChooseOption"


export default function RightColomnMTT({TasksFromDataSet, categoryFromRB, handleAnswer}){

const [arrayWithQuestions, setArrayWithQuestions] = React.useState([])
const [taskObject, setTaskObject] = React.useState({
    id : null,
    category : "test",
    question : "",
    options : ["1","2","3","4"],
    correct : ""
})
const [nrCorrectAnswers, setNrCorrectAnswer] = React.useState(0)
const [nrQuestions, setNrQuestions] = React.useState(0)
const [chosenAnswer, setChosenAnswer] = React.useState("")



React.useEffect(() =>{
    const filteredQuestions = TasksFromDataSet.Tasks.filter((tasks) =>{
        return tasks.category == categoryFromRB})
    setArrayWithQuestions(filteredQuestions)
    setNrQuestions(0)
    setNrCorrectAnswer(0)
    },[categoryFromRB])

        
    function handleAnswer(event){
        setChosenAnswer(event.target.value)
    }



    function NewQuestionClick(){
        setTaskObject(() => {

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
    }   



    return(
        <div style={{display: "inline"}}>
        {arrayWithQuestions.length == 0 ? <h3>No more question try another category</h3>
        :
        <>
       <h4>{taskObject.question}</h4>
       <ChooseOption 
        handleClick={handleAnswer}
        listOfOptions={taskObject.options}
        chosenAnswer={chosenAnswer}
        /> 
        <Button handleClick={NewQuestionClick} >New Question</Button>
       <Button handleClick={NewQuestionClick} >Check answer</Button>
        <h3>{nrCorrectAnswers} / {nrQuestions}</h3> 
         </>
        }

        </div>
    )
}