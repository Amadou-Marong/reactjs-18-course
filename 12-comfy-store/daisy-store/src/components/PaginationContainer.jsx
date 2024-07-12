import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
const PaginationContainer = () => {
  const {meta} = useLoaderData()
  const { page, pageCount } = meta.pagination
  
  const { search, pathname } = useLocation()
  const navigate = useNavigate()

  const pages = Array.from({ length: pageCount}, (_, index) => index + 1)

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  return (
    <div className="pagination flex justify-center items-center mt-8">
      {page > 1 && (
        <button className="btn" onClick={() => handlePageChange(page - 1)}>
          prev
        </button>
      )}
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`btn ${pageNumber === page ? 'btn-active' : ''}`}
        >
          {pageNumber}
        </button>
      ))}
      {page < pageCount && (
        <button className="btn" onClick={() => handlePageChange(page + 1)}>
          next
        </button>
      )}
    </div>
  )
}

export default PaginationContainer














// import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
// const PaginationContainer = () => {
//   const {meta} = useLoaderData()
//   const { page, pageCount } = meta.pagination
//   const location = useLocation()
//   const navigate = useNavigate()
//   const { search } = location
//   const { limit } = meta.pagination
//   const pageInt = parseInt(page)
//   const searchParams = new URLSearchParams(search)
//   const pageUrl = searchParams.get('page')
//   const pageIntUrl = parseInt(pageUrl)
//   const handlePage = (index) => {
//     searchParams.set('page', index)
//     navigate(`${location.pathname}?${searchParams.toString()}`)
//   }

//   return (
//     <div className="pagination flex justify-center items-center mt-8">
//       {pageInt > 1 && (
//         <button className="btn" onClick={() => handlePage(pageInt - 1)}>
//           prev
//         </button>
//       )}
//       {Array.from({ length: pageCount }, (_, index) => {
//         return (
//           <button
//             key={index}
//             onClick={() => handlePage(index + 1)}
//             className={`${
//               index + 1 === pageIntUrl ? 'btn btn-active' : 'btn'
//             }`}
//           >
//             {index + 1}
//           </button>
//         )
//       })}
//       {pageInt < pageCount && (
//         <button className="btn" onClick={() => handlePage(pageInt + 1)}>
//           next
//         </button>
//       )}
//     </div>
//   )
// }

// export default PaginationContainer