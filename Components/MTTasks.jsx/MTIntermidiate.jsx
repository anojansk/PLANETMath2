import React from "react"
import MainPageMTTasks from "./MainPageMTTasks"
import MoreTasksIntermidiate from "../../Datasets/MoreTasksIntermidiate"
import MoreTasksEasy from "../../Datasets/MoreTasksEasy"


export default function MTIntermidiate(){
    return(
        <div>

            <MainPageMTTasks TasksFromDataSet={MoreTasksIntermidiate}/>
        
        </div>
    )
}