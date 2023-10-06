import React from "react"
import { simplify, parse, derivative, simplifyDependencies } from 'mathjs';


export default function LagrangeInterpolCalc({listOfPoints}){

  /**  function findL_n(){
        let factorsForL_n = []
        let listWithL_n = []
        let counter = 0
        xj = listOfPoints[0].xVal
        xi = listOfPoints[0].xVal

        listOfPoints.forEach((item) =>{
            if(xj != xi){
                factorsForL_n.push(`(x-${xj})/(${xi}-${xj})`).toString()
            }
            
        })
    } */
    
    
    const test = 
    simplify(
        '((x ^ 2 - x)/2) * 3 +  (1 - x^2) * 1  + ((x^2 + x)/2) * 3').toString();

    return(
        <h1>{test}</h1>
    )


}