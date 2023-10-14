import React from "react"
import { Link } from "react-router-dom"
import { ToggleContext } from "../index"

export default function Footer(){

    const {pageColor} = React.useContext(ToggleContext)

    return( 
    <footer className={pageColor}>
    <div className="Footer">
        <div className="LinkInFooter">
            <Link to="/About" className="About">About</Link>
            <Link to="/Feedback" className="About">Feedback</Link>

        </div>
    </div>
    </footer>

    
    
    
    )
   

}