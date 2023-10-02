import React from "react"
import { ToggleContext } from "../index"

export default function Button({children, handleClick, className, Color}){

    const {pageColor} = React.useContext(ToggleContext)

    return(
    <button className = {`${className} ${Color} ${pageColor}`} onClick = {handleClick}>{children}</button>
    )

        
}