import './App.css'

// import books from './Books'
import {books} from './Books'
import  Book  from './Book'

const BookList = () => {

  return (
    <>
      <div className="title">
        <h1>Best Selling Books</h1>
      </div>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book key={book.id} {...book} number={index} />;
        })}
      </section>
    </>
  );
}


function App() {
  return (
    <>
      <BookList />
    </>
  )
}

export default App
