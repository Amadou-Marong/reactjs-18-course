import './App.css'

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

// const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/8194oe+zw4L._AC_UL160_SR160,160_.jpg" alt="" />
const Image = () => <img src="../public/images/book1.jpg" alt="" />

const Title = () => <h1>Atomic Habits</h1>
const Author = () => <h4>James Clear</h4>

function App() {
  return (
    <>
      <BookList />
    </>
  )
}

export default App
