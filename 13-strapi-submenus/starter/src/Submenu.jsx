import { useGlobalContext } from "./context";
import sublinks from "./data";
import {useRef} from 'react'
const Submenu = () => {
    const { pageId, setPageId } = useGlobalContext();
    
    const submenuContainer = useRef(null)

    const currentPage = sublinks.find((item) => item.pageId === pageId)
    const handleMouseLeave = (event) => {
        setPageId(null)
    }
    return (
        <div className={currentPage? "submenu show-submenu" : "submenu"} onMouseLeave={handleMouseLeave} ref={submenuContainer}>
            <h5>{currentPage?.page}</h5>
            <div className="submenu-links" style={{gridTemplateColumns: currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr'}}>
                {currentPage?.links?.map((link) => {
                    const {icon, id, label, url} = link
                    return <a key={id} href={url}>{icon} {label}</a>
                })}
            </div>
        </div>
    )
}
export default Submenu