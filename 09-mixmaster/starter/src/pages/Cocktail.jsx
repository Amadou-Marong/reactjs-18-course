import { useLoaderData, Link, Navigate } from "react-router-dom"
import axios from "axios"
import Wrapper from "../assets/wrappers/CocktailPage"
const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import { useQuery } from "@tanstack/react-query";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`)
      return data
    }
  }
}

export const loader = (queryClient) => async ({params}) => {
  const { id } = params;
  await queryClient.ensureQueryData(singleCocktailQuery(id))
 
  return { id }
}

const Cocktail = () => {
  const { id } = useLoaderData()
  
  const { data } = useQuery(singleCocktailQuery(id))
  if(!data){<Navigate to="/"/>}

  const singleDrink = data.drinks[0]
  const {
    strAlcoholic: info,
    strCategory: category,
    strDrink: name,
    strDrinkThumb: image,
    strGlass: glass,
    strInstructions: instructions
  } = singleDrink

  const ingredients = Object.keys(singleDrink).filter((key) => key.startsWith('strIngredient') && singleDrink[key] !== null).map((key) => singleDrink[key])

  return (  
    <Wrapper>
      <header>
        <Link to="/" className="btn">Back to HomePage</Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img"/>
        <div className="drink-info">
          <p><span className="drink-data">name :</span> {name}</p>
          <p><span className="drink-data">category :</span> {category}</p>
          <p><span className="drink-data">info :</span> {info}</p>
          <p><span className="drink-data">glass :</span> {glass}</p>
          <p><span className="drink-data">ingredients :</span> {
            ingredients.map((ingredient, index) => {
              if(index < ingredients.length-1){
                return `${ingredient}, `
              }
              return ingredient
            })
          }</p>
          <p><span className="drink-data">instructions :</span> {instructions}</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail