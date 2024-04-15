const Book = (props) => {
    const {img, title, author, getBook, id} = props;
    const getSingleBook = () => {
      getBook(id)
    }
    
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <button onClick={getSingleBook}>Click Me</button>
        {/* <button onClick={() => getBook(id)}>Click Me</button> */}
        <h4>{author}</h4>
      </article>
    )
}
export default Book