import React, { useEffect } from "react"
import Questions from "../../Datasets/Questions"
import Input from "./Input__Answer"
import HintSolution from "./Hint_Solution"
import Question_Button from "./Question_Button"
import {Link} from "react-router-dom"



export default function TestYourSelf({themeInput, explanation}){

    const [taskObject, setTaskObject] = React.useState({
            id : null,
            theme : "",
            question : null,
            hint : null,
            answer : null
    })

    const [arrayWithQuestions, setArrayWithQuestions] = React.useState([])


    /** This will return a component with the following: 
     * A question in MathJax format, a input field, submit buttin,
     *  a hint button, and a hint.
     */

  

    React.useEffect(() =>{
        const filteredQuestions =  Questions.questions.filter((task) =>{
                return task.theme == themeInput })
        setArrayWithQuestions(filteredQuestions)
        
        },[])
         //Returns an array with given theme and puts in in state.
    //Once, as we dont want it to do this every rerender. 


    const noMoreQuestions = arrayWithQuestions.length > 0 ? true : false 
      //Need to fix s.t it displayes no more questions if questions > 0, or no quetions if questions = 0. 



    function NewQuestionClick(){
        setTaskObject(() => {

            const randomNumber = Math.floor(Math.random() * arrayWithQuestions.length)
            const chosenElement = arrayWithQuestions[randomNumber]

            //Chose Random question from arrayWithQuestions //Object'

           return {
            id : chosenElement.id ,
            theme : chosenElement.theme,
            question : chosenElement.question,
            hint : chosenElement.hint,
            answer : chosenElement.answer
            }
        })
        setArrayWithQuestions((prevArray) =>{
            return prevArray.filter( e => e.question !== taskObject.question)
        })
    }




    return(
        <div style={{textAlign:"center"}}>
            {
        (arrayWithQuestions.length == 0) ? 
            (noMoreQuestions ? 
            <h3>You have answered all questions, find more at  <Link to="/moretasks" style={{textDecoration : "none"}}> More Tasks</Link> </h3>
            :
            <h3>No question in this section (check <Link to="/moretasks" style={{textDecoration : "none"}}> More Tasks</Link>)</h3> )
        :   
          <>
            <h3>Test Yourself!</h3> 
        <div className="TestYourSelfMiniComp">
            
            <Question_Button
             question = {taskObject.question}
             handleClick={NewQuestionClick}
             id = {taskObject.id}
             />


            <Input 
                answer = {taskObject.answer}
                question = {taskObject.question} 
                explanation={explanation}

            /> 
            <HintSolution 
                hint = {taskObject.hint}
                answer = {taskObject.answer} 
                question = {taskObject.question}
                id = {taskObject.id}

            /></div>
           </> 
           }
        
        </div>
               
    )
}



//In testYourself New line is shown, when new question, problem is 
// $ and \[\], need to fix. 