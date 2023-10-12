import React from "react"


export default function ChooseCategory({handleRadioChange, categoryFromRB, listOfOptions}){

for(let i = 0; i <listOfOptions.length; i++ ){

}

const RadioButtons = listOfOptions.map((option) => {
    return(<div className="form-check">
    <label>
      <input
        type="radio"
        value={option}
        checked= {categoryFromRB == option}
        onChange={handleRadioChange}
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