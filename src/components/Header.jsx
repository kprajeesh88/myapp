import Nav from "./Nav";
function Header() {
  const navLinks = [
    {
      id:1,
      linkHref: "",
      linkClass: "nav-link",
      linkText: "Home",
    },
    {
      id:2,
      linkHref: "about",
      linkClass: "nav-link",
      linkText: "About",
    },
    {
      id:3,
      linkHref: "services",
      linkClass: "nav-link",
      linkText: "Services",
    },
    {
      id:4,
      linkHref: "contact",
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
              <Nav
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
