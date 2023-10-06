import React from "react"
import MathJaxComponent from "../MathJax";


export default function ElGamalCalculatorDisplay({message, field, binOperation, generator}){
    
    const AliceRandom = Math.floor(Math.random() * (field-1)) + 1;
 
    const BobRandom = Math.floor(Math.random() * (field-1)) + 1;

    const p = ((generator  * AliceRandom ) % field)
    const q = ((message + (p * BobRandom)) % field)

    
    function findBetweenAddition(x){
        while (x < 0) {
            x = x + field
        }   
        return x     
    }




    return(

        binOperation === "multiplication" ? 
        
        <h2>Coming soon</h2> 
        
        :
        (<div>
            <p>Alice Random {AliceRandom}</p>
            <p>Bob Random {BobRandom}</p>
            <p className="KA"> Cipher text from Alice c = (p,q) = 
                ({(p + ", " + q)}) </p>
            <p className="KA"> Bob deciphering the ciphertext = 
            {findBetweenAddition(q + (p * (-BobRandom)))}
            </p>
         </div>)
    )
}