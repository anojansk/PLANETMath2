import React from "react"
import LeftColomnMTT from "./LeftColomnMTTasks";
import RightColomnMTT from "./RightColomnMTTTasks";
import MoreTasksEasy from "../../Datasets/MoreTasksEasy.js";

export default function MainPageMTTasks({TasksFromDataSet}){


    const [categoryFromRB, setCategoryFromRB] = React.useState("Cryptography")


    function handleRadioClick(event){
        setCategoryFromRB(event.target.value)
    }


    const listOfOptions = ["Cryptography", "Linear Algebra",
                    "Number Theory", "Algebra", "Statistics"]

    


    return(
        <div className = "row" style={{maxHeight: "150%"}}>
            <div className="column">
    
           <h3>Here we will keep the themes/all as radiobuttons</h3>
           <LeftColomnMTT 
           handleRadioClick={handleRadioClick}
           categoryFromRB={categoryFromRB}
           listOfOptions={listOfOptions}
           />
           
            </div>
            
            <div className="column">
                <RightColomnMTT 
                TasksFromDataSet={TasksFromDataSet}
                categoryFromRB={categoryFromRB} 
                />
            </div>
        </div>
    )
}