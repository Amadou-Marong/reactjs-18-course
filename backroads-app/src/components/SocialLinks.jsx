import { socialLinks } from "./data";
const SocialLinks = ({ parentClass, childClass }) => {
  return (
    <ul className="footer-icons">
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.url} target="_blank" className="footer-icon">
              <i className={link.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;
