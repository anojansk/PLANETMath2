import React from "react"
import ChooseCategory from "./ChooseCategory"


export default function LeftColomnMTT({handleRadioClick, categoryFromRB, 
    listOfOptions,
chosenAnswer}){

    


    return(
        <div>
        <ChooseCategory handleClick={handleRadioClick}
                     categoryFromRB={categoryFromRB} 
                     listOfOptions={listOfOptions}
                     
        />
        </div>
    
    )
}