import React from "react"
import { Link } from "react-router-dom"
import { ToggleContext } from "../index"

export default function Footer(){

    const {pageColor} = React.useContext(ToggleContext)

    return( 
    <footer className={pageColor}>
    <div className="Footer">
        <h2>THIS IS FOOTER</h2>
        <div className="LinkInFooter">
            <Link to="/About" className="About">About</Link>
            <Link to="/About" className="About">Something</Link>
            <Link to="/Feedback" className="About">Feedback</Link>

        </div>
    </div>
    </footer>

    
    
    
    )
   

}