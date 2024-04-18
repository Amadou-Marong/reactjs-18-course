import { pageLinks } from "./data"
const PageLinks = ({parentClass, itemClass}) => {
    return (
        <ul className={parentClass} id="nav-links">
            { pageLinks.map((link) => {
               return (
                <li key={link.id}>
                  <a href={link.url} className={itemClass}>
                    {link.text}
                  </a>
                </li>
               )
            })}
        </ul>
    )
}
export default PageLinks