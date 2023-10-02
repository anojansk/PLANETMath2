import React from "react"
import MainPageMTTasks from "./MainPageMTTasks"
import MoreTasksEasy from "../../Datasets/MoreTasksEasy"

export default function MTEasy(){
    return(
        <div>

            <MainPageMTTasks TasksFromDataSet={MoreTasksEasy} />
        
        </div>
    )
}