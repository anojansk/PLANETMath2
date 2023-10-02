import React from "react"
import MainPageMTTasks from "./MainPageMTTasks"
import MoreTasksDifficult from "../../Datasets/MoreTasksDifficult"


export default function MTDifficult(){
    return(
        <div>

            <MainPageMTTasks TasksFromDataSet={MoreTasksDifficult} />
        
        </div>
    )
}