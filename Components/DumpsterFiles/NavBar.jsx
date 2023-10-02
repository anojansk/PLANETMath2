import React from "react"
import About from "../../Pages/About"
import Home from "../../Pages/Home"
import {  BrowserRouter, Routes, Route, Link} from "react-router-dom"
import CRT from "../../Pages/NumberTheory/CRT"

export default function NavBar(){

    return(
        <nav>
    <BrowserRouter>
    <nav>
        <Link to="/">PlanetOfMath</Link>
        <Link to="/" className="Home">Home</Link>
        <Link to="/about" className="About">Linear Algebra</Link>
        <Link to="/about" className="About">Cryptography</Link>
        <Link to="/CRT" className="About">CRT</Link>
        <Link to="/about" className= "About">Test Yourself</Link>
    </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route  path="/CRT" element={<CRT />}/>
        </Routes>
    </BrowserRouter>    
    </nav>
    )
}

