import React from "react";

const Ingridient = ({drink}) => {

  return (<>
    <div key={drink.id} className=" col-lg-3 col-md-3 col-sm-3">
      <img src={drink.strDrinkThumb} className="img-fluid" alt={drink.strDrinkThumb}/>
      <h4>{drink.strDrink}</h4>
    </div>
  </>);
}
export default Ingridient;