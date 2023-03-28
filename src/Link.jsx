function Link({ linkHref, linkClass, linkText }) {
  return (
    <li>
      <a href={linkHref} className={linkClass}>
        {linkText}
      </a>
    </li>
  );
}

export default Link;
