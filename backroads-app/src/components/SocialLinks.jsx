import { socialLinks } from "./data";
const SocialLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.url} target="_blank" className={childClass}>
              <i className={link.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;
