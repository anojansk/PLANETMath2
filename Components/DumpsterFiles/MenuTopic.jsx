import React from "react"
import { NavBarContext } from "./MenuNavBar"


export default function MenuTopic({children, className}){

       const { HoverTopic, RemoveMenu } = React.useContext(NavBarContext)


    return(
        <>
        <div className = {`Menutopic ${className}`} 
        onMouseOver={HoverTopic}
        onMouseLeave={RemoveMenu}>
       {children}
       </div>
       </>
       
    )
}