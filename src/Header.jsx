import Link from "./Link";

function Header() {
  const navLinks = [
    {
      id:1,
      linkHref: "home.html",
      linkClass: "nav-link",
      linkText: "Home",
    },
    {
      id:2,
      linkHref: "about.html",
      linkClass: "nav-link",
      linkText: "About",
    },
    {
      id:3,
      linkHref: "service.html",
      linkClass: "nav-link",
      linkText: "Service",
    },
    {
      id:4,
      linkHref: "Contact.html",
      linkClass: "nav-link",
      linkText: "Contact",
    },
  ];

  return (
    <div className="header-wraper">
      <h1>MyTrips<span>.</span></h1>
      <div className="header">
        <ul>
          {navLinks.map(function (navItem) {
            return (
              <Link
                key={navItem.id}
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
