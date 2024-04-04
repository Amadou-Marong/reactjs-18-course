import './App.css'

const firstBook = {
  title : 'Atomic Habits',
  author : 'James Clear',
  img : '../public/images/book1.jpg'
}

const secondBook = {
  title : 'The Power of Habit',
  author : 'Charles Duhigg',
  img : '../public/images/book2.jpg'
}

const BookList = () => {
  return (
    <section className='booklist'>
      <Book title={firstBook.title} author={firstBook.author} img={firstBook.img}/>
      <Book title={secondBook.title} author={secondBook.author} img={secondBook.img}/>
    </section>
  )
}


const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt={props.title}/>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      {console.log(props)}
    </article>
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
