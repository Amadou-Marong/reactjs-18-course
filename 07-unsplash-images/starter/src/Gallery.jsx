import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useGlobalContext } from "./context"

// const url = 'https://api.unsplash.com/search/photos?client_id=Bpd7ZNo6P1Il7TQPkK1oQLw1Jvz19IYEN2oNgErZRCI&query=office'
const url = 'https://api.unsplash.com/search/photos?client_id=Bpd7ZNo6P1Il7TQPkK1oQLw1Jvz19IYEN2oNgErZRCI'

const Gallery = () => {
  const {search, setSearch} = useGlobalContext()
  
  const response = useQuery({
    queryKey: ['images', search],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${search}`)

      return result.data
    }
  })
  // console.log(response);
  if(response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }
  
  const results = response.data.results;

  if(results.length < 1) {
    return (
      <section className="image-container">
        <h4>No Results Found</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular
        return <img src={url} key={item.id} alt={item.alt_description} className="img"/>
      })}
    </section>
  )

  
}

export default Gallery