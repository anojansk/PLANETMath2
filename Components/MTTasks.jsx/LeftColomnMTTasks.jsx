import React from "react"
import ChooseCategory from "./ChooseCategory"


export default function LeftColomnMTT({handleRadioChange, categoryFromRB, 
    listOfOptions}){

    


    return(
        <div>
        <ChooseCategory handleRadioChange={handleRadioChange}
                     categoryFromRB={categoryFromRB} 
                     listOfOptions={listOfOptions}
                     
        />
        </div>
    
    )
}