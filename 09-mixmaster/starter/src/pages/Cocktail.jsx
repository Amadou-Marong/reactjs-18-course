import { useLoaderData, Link } from "react-router-dom"
import axios from "axios"
import Wrapper from "../assets/wrappers/CocktailPage"
const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async (data) => {}

const Cocktail = () => {
  return (
    <div>
        <h2>Cocktail</h2>
    </div>
  )
}

export default Cocktail