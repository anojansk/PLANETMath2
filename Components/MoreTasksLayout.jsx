import React from "react"
import {Link, Outlet} from "react-router-dom"
import Button from "./Button"




export default function MoreTasksLayout(){
    
    return (
    <>
        <div>
            <Link to="/moretasks"><Button Color = {"green"}>Easy</Button></Link>
            <Link to="/moretasks/intermidiate"><Button Color = {"yellow"}>Intermidiate</Button></Link>
            <Link to="/moretasks/difficult" ><Button Color = {"red"}>Difficult</Button></Link> 
        </div>
        <Outlet />
    </>
        )
}