const PageLink = () => {
  return (
    <li key={link.id}>
      <a href={link.url} className={childClass}>
        {link.text}
      </a>
    </li>
  );
};
export default PageLink;
