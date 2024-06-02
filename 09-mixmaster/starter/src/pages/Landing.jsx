import axios from "axios"
import { useLoaderData } from "react-router-dom"

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = 'margarita'
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  return { drinks: response.data.drinks, searchTerm }
}
const Landing = () => {
  const { drinks, searchTerm } = useLoaderData()
  console.log(drinks);
  return (
    <div>
        <h2>Landing</h2>
    </div>
  )
}

export default Landing