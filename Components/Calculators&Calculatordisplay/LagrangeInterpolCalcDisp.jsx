import React from "react";
import MathJaxComponent from "../MathJax";
import LagrangeInterpolCalc from "./LagrangeInterpolCalc";
import Button from "../Button";

export default function LagrangeCalcDisplay() {
  const [listOfPoints, setListOfPoints] = React.useState([]);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  function handleClick() {
    const point = {
      xVal : x,
      yVal : y,
    };

    setListOfPoints((prevState) => [...prevState, point]); // Corrected state update
    setX(0);
    setY(0);
  }

  function handleX(event) {
    setX(event.target.value);
  }

  function handleY(event) {
    setY(event.target.value);
  }

  /*const showPoints = listOfPoints.map((elem) =>{
    return <div>{elem.xVal}, {elem.yVal}</div>
  })*/

  return (
    <div>
      <MathJaxComponent
        mathExpression={"Write interpolation points and their respective $y_i$ values to find $p_n(x)$"}
      />
      <div style={{ display: "flex" }}>
        <input
          placeholder="x"
          style={{ width: "8%" }}
          type="number"
          onChange={handleX}
          value={x}
        />
        <input
          placeholder="y"
          style={{ width: "8%" }}
          type="number"
          onChange={handleY}
          value={y}
        />
        <Button handleClick={handleClick}>Add points</Button>
      </div>
      <h2>{x}, {y}</h2>
      {console.log(listOfPoints)}
      

      <LagrangeInterpolCalc listOfPoints={listOfPoints} />
    </div>
  );
}