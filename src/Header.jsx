import Link from "./Link";

function Header() {
  const navLinks = [
    {
      linkHref: "home.html",
      linkClass: "nav-link",
      linkText: "Home",
    },
    {
      linkHref: "about.html",
      linkClass: "nav-link",
      linkText: "About",
    },
    {
      linkHref: "service.html",
      linkClass: "nav-link",
      linkText: "Service",
    },
    {
      linkHref: "Contact.html",
      linkClass: "nav-link",
      linkText: "Contact",
    },
  ];

  return (
    <div className="header-wraper">
      <div className="header">
        <ul>
          {navLinks.map(function (navItem) {
            return (
              <Link
                linkHref={navItem.linkHref}
                linkClass={navItem.linkClass}
                linkText={navItem.linkText}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
