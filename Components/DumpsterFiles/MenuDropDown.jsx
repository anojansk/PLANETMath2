/*import React from "react"
import MenuItem from "../MenuComponents/MenuItem"
import { NavBarContext } from "../MenuComponents/MenuNavBar"
import { ToggleContext } from "../../index"



export default function MenuDropDown({children}){

    const {open, HoverTopic, RemoveMenu } = React.useContext(NavBarContext)
    const {pageColor} = React.useContext(ToggleContext)

    const menuElements = children.map((element) =>{
        return(
        <div>
                <MenuItem key={element}>{element}</MenuItem>
        </div>
    )})

    return open ? (
        <div className={`MenuDropDown-${pageColor}`} 
        onMouseOver={HoverTopic}
        onMouseLeave={RemoveMenu}>
     {menuElements} 
     </div> 
    ) : null
}

*/


