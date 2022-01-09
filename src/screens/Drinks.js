import React, {useState, useEffect} from "react";
import axios from "axios";
import Ingridient from "../components/Ingridient";
import Drink from "../components/Drink";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);
  const [ingredient, setIngredient] = useState('Vodka');
  const [onLoading, setOnLoading] = useState(true);

  const ingridientChoices = ['Vodka', 'Gin', 'Rum', 'Tequila', 'Cream', 'Mango'];

  const fetchData = async () => {
    try {
      setOnLoading(true);
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      setDrinks(response.data.drinks);
    } catch (e) {
      alert("une erreur est survenue");
    }
  };

  useEffect(() => {
    fetchData();
    setOnLoading(false);
  }, [ingredient]);

  return (onLoading ? <div>En chargement</div> :
      <div className="container">
        <div className="row">
          {ingridientChoices.map((drinkChoice, index) => {
            return <Ingridient ingredient={ingredient} setIngredient={setIngredient} drinkChoice={drinkChoice}/>
          })}
        </div>
        <div className="row">
          {drinks.map((drink, index) => {
            return <Drink key={index} drink={drink}/>
          })}
        </div>
      </div>
  );
}
export default Drinks;