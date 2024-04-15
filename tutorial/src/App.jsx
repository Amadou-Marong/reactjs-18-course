import './App.css'

// import books from './Books'
import {books} from './Books'
import  Book  from './Book'

const BookList = () => {

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}/>
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
