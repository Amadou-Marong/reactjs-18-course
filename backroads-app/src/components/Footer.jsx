// import { pageLinks, socialLinks } from "./data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "./data";
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" childClass="footer-link"/>
      {/* <ul className="footer-links">
        {pageLinks.map((link) =>{
          return (
            <li key={link.id}>
              <a href={link.url} className="footer-link">
                {link.text}
              </a>
            </li>
          )
        })}
      </ul> */}
      <SocialLinks parentClass="footer-icons" childClass="footer-icon"/>
      {/* <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url} target="_blank" className="footer-icon">
                <i className={link.icon}></i>
              </a>
            </li>
          )
        })}
      </ul> */}
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer