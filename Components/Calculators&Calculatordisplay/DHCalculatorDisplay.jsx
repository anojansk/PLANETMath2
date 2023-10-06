import React from "react"
import MathJaxComponent from "../MathJax"
import DHCalculator from "./DHCalculator"


export default function DHCalculatorDisplay(){

    const [field, setField] = React.useState("")
    const [binOperation, setBinOperation] = React.useState("")
    const [generator, setGenerator] = React.useState("")


/**    const arrayWithFields = [11,11,13,117,23].map(fieldElement =>(
    
        <DHButtons key={fieldElement} 
                   handleField={handleField}
                   handleBinOperation={handleBinOperation}>
                {fieldElement}
        </DHButtons>
        
    ))*/ 


    function handleField(event){
        setField(event.target.value)    
    }

    function handleBinOperation(event){
        setBinOperation(event.target.value)
    }

    function handleGenerator(event){
        setGenerator(event.target.value)
    }


  const fieldOptions =
    <fieldset>

        <input
            type="radio"
            id="9"
            name="field"
            value = {9}         
            checked = {field === "9"}
            onChange={handleField}
        />
        <label htmlFor="9">9</label>
        <br/>
        <input
            type="radio"
            id="11"
            name="field"
            value = {11}
            checked = {field === "11"}
            onChange={handleField}

        />
        <label htmlFor="11">11</label>
        <br />

        <input
            type="radio"
            id="13"
            name="field"
            value = {13}
            checked = {field === "13"}

            onChange={handleField}

        />
        <label htmlFor="13">13</label>
        <br />

        <input
            type="radio"
            id="17"
            name="field"
            value = {17}
            checked = {field === "17"}
            onChange={handleField}

        />
        <label htmlFor="17">17</label>
        
    </fieldset>

const binOperationOptions =
<fieldset>
    <input
        type="radio"
        id="addition"
        name ="binOperation"
        value = "addition"
        checked = {binOperation === "addition"}
        onChange={handleBinOperation}

    />
    <label htmlFor="addition">Addition</label>
    <br />

    <input
        type="radio"
        id="multiplication"
        name ="binOperation"
        value = "multiplication"
        checked = {binOperation === "multiplication"}
        onChange={handleBinOperation}

    />
    <label htmlFor="multiplication">Multiplication</label>
    
</fieldset>


const generatorOptions = 
<fieldset>
        <input
            type="radio"
            id="2"
            name ="generator"
            value = {2}
            checked = {generator === "2"}
            onChange={handleGenerator}

        />
        <label htmlFor="2">2</label>
        <br />

        <input
            type="radio"
            id="3"
            name ="generator"
            value = {3}
            checked = {generator === "3"}
            onChange={handleGenerator}

        />
        <label htmlFor="3">3</label>

        <br />
        

        <input
            type="radio"
            id="5"
            name ="generator"
            value = {5}
            checked = {generator === "5"}
            onChange={handleGenerator}
        />
        <label htmlFor="5">5</label>
        <br />
        
        <input
            type="radio"
            id="7"
            name ="generator"
            value = {7}
            checked = {generator === "7"}
            onChange={handleGenerator}
        />
        <label htmlFor="7">7</label>
        <br />

</fieldset>

   const calculations = (field && binOperation && generator ) &&
                        <DHCalculator 
                            field={Number(field)}
                            binOperation = {binOperation}
                            generator={Number(generator)}
                            
                        />



    return(
        <>
    <h3>DH Calculator</h3>
     <h4>Choose a field, 9, 11, 13 or 17, a binary operator and 
        a generator 2, 3, 5, or 7</h4> 
     <div style={{display: "flex", justifyContent: "center"}}>
        {fieldOptions}
        <div>        
            {binOperationOptions}
        </div>
        {generatorOptions}
     </div>
       
       {calculations}
        

        
       </>
    )
    //Here you can change to Radio DHButton? and for binary op, that would work better
    //Should be able to change the fields to arbritrary (prime fields)
}