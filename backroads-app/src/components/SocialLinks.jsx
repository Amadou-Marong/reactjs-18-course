import SocialLink from "./SocialLink";
import { socialLinks } from "./data";
const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const {id, url, icon} = link
        return (
          <li key={id}>
            <a href={url} target="_blank" className={itemClass}>
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;
