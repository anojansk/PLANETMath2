import React from "react"


export default function DHCalculator({protocol, field, binOperation, generator}){
    
    const AliceRandom = Math.floor(Math.random() *(field-1)) +1;
 
    const BobRandom = Math.floor(Math.random() * (field-1)) +1;


    return(
        
        binOperation === "multiplication" ?
        <div>
            <p>Alice Random {AliceRandom}</p>
            <p>Bob Random {BobRandom}</p>
            <p className="KA"> Alice Key {Math.pow(generator, AliceRandom ) % field} </p>
            <p className="KB"> Bob Key {Math.pow(generator, BobRandom) % field}</p>
            <p className="SA"> Alice Shared key {Math.pow((Math.pow(generator, AliceRandom) % field),BobRandom) % field} </p>
            <p className="SB"> Bob Shared key {Math.pow((Math.pow(generator, BobRandom) % field),AliceRandom) % field}</p>
        </div>
        : 
        <div>
            <p>Alice Random {AliceRandom}</p>
            <p>Bob Random {BobRandom}</p>
            <p className="KA"> Alice Key {(generator  * AliceRandom ) % field} </p>
            <p className="KB"> Bob Key {(generator * BobRandom) % field}</p>
            <p className="SA"> Alice Shared key {(((generator * AliceRandom) % field) * BobRandom) % field} </p>
            <p className="SB"> Bob Shared key {(((generator * BobRandom) % field) * AliceRandom) % field}</p>
         </div>
        
)}