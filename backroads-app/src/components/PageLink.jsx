const PageLink = ({url, text, itemClass}) => {
  return (
    <li>
      <a href={url} className={itemClass}>
        {text}
      </a>
    </li>
  );
};
export default PageLink;
