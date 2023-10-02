import React from "react"
import MoreTasksEasy from "../../Datasets/MoreTasksEasy.js";
import MainPageMTTasks from "./MainPageMTTasks";

export default function MTAll(){

    return(
        <div>

            <MainPageMTTasks TasksFromDataSet={MoreTasksEasy}/>
        
        </div>
    )
}