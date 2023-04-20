import { Link } from "react-router-dom";
function Nav({ linkHref, linkClass, linkText }) {
  return (
    <li>
      <Link to={linkHref} className={linkClass}>{linkText}</Link>
    </li>
  );
}

export default Nav;
