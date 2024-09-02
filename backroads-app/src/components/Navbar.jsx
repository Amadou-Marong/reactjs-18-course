import logo from "../assets/images/logo.svg";
import PageLinks from './PageLinks';
// import PageLink from "./PageLink";
import SocialLink from "./SocialLink";
import { socialLinks, pageLinks } from "./data";
// import SocialLinks from './SocialLinks';
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
        <PageLinks parentClass="nav-links" itemClass="nav-link"/>

        {/* <ul className="nav-links">
          {pageLinks.map((link) => {
            return <PageLink key={link.id} {...link} itemClass="nav-link" />;
          })}
        </ul> */}

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} {...link} itemClass="nav-icon" />;
          })}
        </ul>
        {/* <SocialLinks parentClass="nav-icons" itemClass="nav-icon"/> */}
      </div>
    </nav>
  );
};
export default Navbar;
