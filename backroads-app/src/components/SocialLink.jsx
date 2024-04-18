const SocialLink = ({url, icon, itemClass}) => {
  return (
    <li>
      <a href={url} target="_blank" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
