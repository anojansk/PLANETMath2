import React from "react"
import EPFCalculator from "./EPFCalculator"
import Button from "../Button";

export default function EPFCalcDisplay(){
    
    const [userInp, setUserInp] = React.useState(0)

    
    function handleChange(event){
        setUserInp(event.target.value)
    }

  

    return(
        <div>

        
        <h2>Use the Euler Phi Function Calculator below: </h2>
        <input className="inpField"
                type = "number"
                placeholder="Write a number"
                onChange = {handleChange}
                value = {userInp}
        />
        <Button>Find value</Button>
        {(userInp < 10000000 && userInp >= 0)? <EPFCalculator userInp = {userInp}/> : <h3>Input has to be a positive number less than 1 000 000</h3>}
        </div>
    )

}