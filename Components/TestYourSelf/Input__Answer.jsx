import React from "react"
import Button from "../Button"
import Memes from "../../Datasets/Memes"

export default function Input({answer, question, explanation}){


    const positive = Memes.memes.filter((meme) =>{
        return meme.value == "positive"
    }) 

    const negative = Memes.memes.filter((meme) =>{
        return meme.value == "negative"
    }) 

    const randomNumberP = Math.floor(Math.random() * positive.length)
    const randomNumberN = Math.floor(Math.random() * negative.length)
    
    const imagePositive = positive[randomNumberP].image
    const imageNegative = negative[randomNumberN].image

    

    //Kan vi forkorte dette til noe mindre, mindre kode



    const [userAnswer, setUserAnswer] = React.useState("")
    const [result, setResult] = React.useState("")


    function handleChange(event){
        setUserAnswer(event.target.value)
    }

    function handleClick(){
        let correct = "Write something"
        userAnswer && (correct = userAnswer == answer ? <img src={`../Images/${imagePositive}`}/> : <img src={`../Images/${imageNegative}`}/>)
        setResult(correct)     
    }

    
    React.useEffect(()=>{
        setUserAnswer("")
        setResult("")
    }, [question])
    

    return(
       <div className ="InpAns_Comp">
            <input
                className="inpField"
                type = "text"
                placeholder="Write answer here"
                onChange = {handleChange}
                value = {userAnswer}
            />
            <Button handleClick={handleClick}>Check answer</Button>
            {result ? <div>{result}</div> 
                :  <div style={{marginTop: "15px"}}>{explanation}</div>}

        </div>
    )

    }