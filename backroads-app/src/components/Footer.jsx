// import { pageLinks, socialLinks } from "./data";
import PageLinks from "./PageLinks";
// import SocialLinks from "./SocialLinks";

import PageLink from "./PageLink"
import SocialLink from "./SocialLink";
import { pageLinks, socialLinks } from "./data";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link"/>
  
      {/* <SocialLinks parentClass="footer-icons" itemClass="footer-icon"/> */}
        {/* <ul className="footer-links">
            {pageLinks.map((link) => {
              return <PageLink key={link.id} {...link} itemClass="footer-link"/>
            })}
        </ul> */}

        <ul className="footer-icons">
            {socialLinks.map((link) => {
              return <SocialLink key={link.id} {...link} itemClass="footer-icon"/>
            })}
        </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer