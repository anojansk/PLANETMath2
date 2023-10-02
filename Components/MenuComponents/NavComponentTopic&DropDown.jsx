import React from "react"
import MenuItem from "./MenuItem"
import { NavBarContext } from "./MenuNavBar"
import { ToggleContext } from "../../index"



export default function NavComponentTDD({topicName, listLinkNames}){
    
    
    const  {open, ShowMenu, RemoveMenu } = React.useContext(NavBarContext)
    const {pageColor} = React.useContext(ToggleContext)


     const dropdownMenu= listLinkNames.map((item) => {
       return(
        open == topicName && 
        <div>
        <MenuItem key={item}>
           {item}
        </MenuItem>
        </div>  
       )       
    })


    return(
        <div onMouseOver={() => ShowMenu(topicName)} onMouseLeave={RemoveMenu}>
            
        <div className = {`MenuTopics-${pageColor}`}>{topicName} </div>

        <div className={`MenuDropDown-${pageColor}`}>
        {dropdownMenu}
        </div>

        </div>
    )


}