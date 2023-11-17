import React from "react"
import { Link } from "react-router-dom"
import { BsToggleOff, BsToggleOn } from "react-icons/bs"
import {PiPlanetDuotone} from "react-icons/pi"
import MenuNavBar from "./MenuComponents/MenuNavBar"
import NavComponentTDD from "./MenuComponents/NavComponentTopic&DropDown"
import { ToggleContext } from "../index"



export default function Header(){

const {pageColor, handleClick, DarkMode} = React.useContext(ToggleContext)

    const CryptographyItems = [{Path : "RSA", Name : "RSA"}, 
                               { Path : "OV", Name : "Oil & Vinegar"}  , 
                                {Path : "MI", Name : "Matsumoto Imai"}, 
                                {Path : "DH", Name : "Diffie-Hellman"},
                                 {Path : "ElGamal", Name : "ElGamal"}]
 
    const NumberTheoryItems = [ {Path : "CRT", Name : "Remainder Theorem"},
                                {Path : "FLT", Name : "Fermats Little Theorem"},
                                {Path : "ET", Name : "Eulers Theorem"},
                                {Path : "EPF", Name : "Eulers Phi-Function"}]

    const CalculusItems =  [{Path : "Integration", Name : "Integration"}, 
                            { Path : "OV", Name : "Limits"}  , 
                            {Path : "Lhopital", Name : "L'hopital"}, 
                            {Path : "DH", Name : "Theme 4"}]
    
    const NumericalAnalysisItems = [{Path : "LagrangeInterpolation", Name : "Lagrange Interpolation"},
                                    {Path : "LUFactorising", Name : "LU Factorization"},
                                    {Path: "NumericalIntegration", Name : "Numerical Integration"}]
    
                                    
    const AlgebraItems = [{Path : "Groups", Name : "Groups"} , 
                            { Path : "CyclicGroups", Name : "Sub Groups"}  , 
                            {Path : "CyclicGroups", Name : "Cyclic Groups"}]


    return(
        <header className={pageColor}>
        <h2><Link to="/" className="Home">PlanetOfMath <PiPlanetDuotone size={35} /></Link></h2>
        <MenuNavBar>
           <NavComponentTDD
           topicName="Cryptography"
           listLinkNames={CryptographyItems}
           />
           <NavComponentTDD
           topicName="Numerical Analysis"
           listLinkNames={NumericalAnalysisItems}
           />
            <NavComponentTDD
           topicName="Abstract Algebra"
           listLinkNames={AlgebraItems}
           />
           <NavComponentTDD
           topicName="Number Theory"
           listLinkNames={NumberTheoryItems}
           />
           <NavComponentTDD
           topicName="Calculus"
           listLinkNames={CalculusItems}
           />
           <Link to="/moretasks" style={{marginLeft: "10px", textDecoration:"none", color: "brown"}}>More Tasks</Link>
        </MenuNavBar>
        <div className="Toggle" onClick={handleClick}>{DarkMode ? <BsToggleOn size={22} /> : <BsToggleOff size={22}  />}</div>
      
     </header>
    )

}


