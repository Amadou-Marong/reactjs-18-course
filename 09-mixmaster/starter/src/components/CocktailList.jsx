import Wrapper from "../assets/wrappers/CocktailList"
import CocktailCard from "./CocktailCard"

const CocktailList = ({drinks}) => {
    if(!drinks) {
        return <h2 style={{textAlign: "center"}}>No Matching drinks found</h2>
    }
    const formattedDrinks = drinks.map((item) => {
        const {idDrink, strAlcoholic, strCategory, strDrink, strDrinkThumb, strGlass} = item
        return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
            category: strCategory
        }
    })
  return (
    <Wrapper> 
        {formattedDrinks.map((item) => {
            return <CocktailCard key={item.id} {...item}/>
        })}
    </Wrapper>
  )
}


export default CocktailList