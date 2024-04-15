const Book = (props) => {
    const {img, title, author, number} = props;
    
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <span className="number">{`# ${number + 1}`}</span>
      </article>
    )
}
export default Book