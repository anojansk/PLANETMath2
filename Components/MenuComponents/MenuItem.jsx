import React from "react"
import { Link } from "react-router-dom"
import { ToggleContext } from "../../index"


export default function MenuItem({children}){

    const {pageColor} = React.useContext(ToggleContext)


    return(
        <div className={`MenuLinks-${pageColor}`}>
                <Link to = {`/${children.Path}`}>{children.Name}</Link>
        </div>
    )
}   