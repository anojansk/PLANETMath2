import React from "react"


export default function ChooseOption({handleChange, listOfOptions, chosenAnswer}){


  const RadioButtons = listOfOptions.map((option) => {
      return(
      <div className="form-check">
        <label>
          <input
            type="radio"
            value={option}
            checked= {chosenAnswer == option}
            onChange={handleChange}
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