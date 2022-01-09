import React from "react";

const Ingridient = ({ingredient, setIngredient, drinkChoice}) => {

  return (<div className=" col-lg-2 col-md-2 col-sm-2">
    <button className={`ingredient-button ${(ingredient === drinkChoice) && "selected-button"}`}
            onClick={() => {
              setIngredient(drinkChoice);
            }}>{drinkChoice}
    </button>
  </div>);
}
export default Ingridient;