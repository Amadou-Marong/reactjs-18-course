import { useLoaderData, Link } from "react-router-dom"
import axios from "axios"
import Wrapper from "../assets/wrappers/CocktailPage"
const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({params}) => {
  const {id} = params
  const { data } = await axios.get(`${singleCocktailUrl}${id}`)
 
  return {id, data}
}

const Cocktail = () => {
  const { id, data } = useLoaderData()
  
  const singleDrink = data.drinks[0]
  const {
    strAlcoholic: info,
    strCategory: category,
    strDrink: name,
    strDrinkThumb: image,
    strGlass: glass,
    strInstructions: instructions
  } = singleDrink

  return (
    <div>
        <h2>Cocktail</h2>
    </div>
  )
}

export default Cocktail