import { NavbarLinks } from "./NavbarLinks";
import { NavbarSocials } from "./NavbarSocials";
import { NavbarToggle } from "./NavbarToggle";

export const Navbar = () => {
  return (
    <nav className="nav">
      <NavbarToggle />
      <ul className="nav__list">
        <NavbarLinks />
        <NavbarSocials />
      </ul>
    </nav>
  );
};
