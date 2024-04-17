import { pageLinks } from "./data"
const PageLinks = ({parentClass, childClass}) => {
    return (
        <ul className={parentClass} id="nav-links">
            { pageLinks.map((link) => {
               return (
                <li key={link.id}>
                  <a href={link.url} className={childClass}>
                    {link.text}
                  </a>
                </li>
               )
            })}
        </ul>
    )
}
export default PageLinks