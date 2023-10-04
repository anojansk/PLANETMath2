import React from "react"
import MoreTasksEasy from "../../Datasets/MoreTasksEasy.js";
import MainPageMTTasks from "../MTTasks.jsx/MainPageMTTasks.jsx";

export default function MTAll(){

    return(
        <div>

            <MainPageMTTasks TasksFromDataSet={MoreTasksEasy}/>
        
        </div>
    )
}