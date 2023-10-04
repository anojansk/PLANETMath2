import React from "react"


export default function ChooseOption({handleClick, listOfOptions, chosenAnswer}){

for(let i = 0; i <listOfOptions.length; i++ ){

}

const RadioButtons = listOfOptions.map((option) => {
    return(<div className="form-check">
    <label>
      <input
        type="radio"
        value={option}
        checked= {chosenAnswer == option}
        onClick={handleClick}
        className="form-check-input"
      />
      {option}
    </label>
  </div>)
})
return(
  <div>
{RadioButtons}
</div>

    )
}