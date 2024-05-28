import { useGlobalContext } from "./context";

const SearchForm = () => {
  const {setSearch} = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if(!searchValue) return;
    setSearch(searchValue)
  }
  return (
    <section>
      <h1 className="title">unslaph images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="cat" className="form-input" />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm