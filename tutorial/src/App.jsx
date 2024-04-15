import './App.css'

// import books from './Books'
import {books} from './Books'
import  Book  from './Book'

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book);
  }
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} getBook={getBook}/>
      })}
      
    </section>
  )
}


function App() {
  return (
    <>
      <BookList />
    </>
  )
}

export default App
