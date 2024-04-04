import './App.css'

const books = [
  {
    id: 1,
    img : '../public/images/book1.jpg',
    title : 'Atomic Habits',
    author : 'James Clear'
  },
  {
    id: 2,
    img : '../public/images/book2.jpg',
    title : 'The Power of Habit',
    author : 'Charles Duhigg'
  }

]

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // const { id, img, title, author } = book
        // return <Book key={id} img={img} title={title} author={author} />
        return <Book key={book.id} book={book} />
      })}
    </section>
  )
}


const Book = (props) => {
  const {img, title, author } = props.book
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
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
