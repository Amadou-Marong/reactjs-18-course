import './App.css'

const books = [
  {
    id: 1,
    img : '/images/book1.jpg',
    title : 'Atomic Habits',
    author : 'James Clear'
  },
  {
    id: 2,
    img : '/images/book2.jpg',
    title : 'The Power of Habit',
    author : 'Charles Duhigg'
  }

]

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

const EventHandling = () => {
  const clickHandler = () => {
    console.log('hello world')
  }
  const changeHandler = (e) => {
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      <h2>Event Handling</h2>
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="example" onChange={changeHandler} />
          <button type="submit">Submit</button>
        </div>
        <div>
          <button type="button" onClick={clickHandler}>
            Click Me
          </button>
        </div>
      </form>
    </section>
  );
}


const Book = (props) => {
  const {img, title, author } = props
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
      <EventHandling />
      <BookList />
    </>
  )
}

export default App
