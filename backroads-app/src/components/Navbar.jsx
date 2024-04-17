import logo from '../assets/images/logo.svg';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
// import { socialLinks } from './data';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <PageLinks parentClass="nav-links" childClass="nav-link"/>
          {/* <ul className="nav-links" id="nav-links">
            { pageLinks.map((link) => {
               return (
                <li key={link.id}>
                  <a href={link.url} className="nav-link">
                    {link.text}
                  </a>
                </li>
               )
            })}
          </ul> */}
          <SocialLinks parentClass="nav-icons" childClass="nav-icon"/>
          {/* <ul className="nav-icons">
            { socialLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url} target="_blank" className="nav-icon">
                      <i className={link.icon}></i>
                    </a>
                  </li>
                )
            })}
          </ul> */}
          
        </div>
      </nav>
    );
}
export default Navbar;