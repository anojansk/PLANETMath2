import React from "react"


export default function ChooseCategory({handleClick, categoryFromRB, listOfOptions, chosenAnswer}){

for(let i = 0; i <listOfOptions.length; i++ ){

}

const RadioButtons = listOfOptions.map((option) => {
    return(<div className="form-check">
    <label>
      <input
        type="radio"
        value={option}
        checked= {categoryFromRB == option || chosenAnswer == option}
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
<h1>{categoryFromRB}</h1>
</div>

    )
}