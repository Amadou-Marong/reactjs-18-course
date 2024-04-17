import { pageLinks, socialLinks } from "./data";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) =>{
          return (
            <li key={link.id}>
              <a href={link.url} className="footer-link">
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url} target="_blank" className="footer-icon">
                <i className={link.icon}></i>
              </a>
            </li>
          )
        })}
        {/* <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
          >
            <i className="fab fa-squarespace"></i>
          </a>
        </li> */}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer