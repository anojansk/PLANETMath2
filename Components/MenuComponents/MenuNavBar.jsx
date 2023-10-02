import React from "react"


const NavBarContext = React.createContext()

export default function MenuNavBar({children}){


    const [open, setOpen] = React.useState(null);



    function ShowMenu(topicName){
        setOpen(topicName)
    }

    function RemoveMenu(){
        setOpen(null)
    }

    return(
        <NavBarContext.Provider value = {{open, ShowMenu, RemoveMenu}}>
        <div className="MenuNavBar">
        {children}
        </div>
        </NavBarContext.Provider>
    )
}

export {NavBarContext}