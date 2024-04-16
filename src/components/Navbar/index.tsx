"use client";
import { useState } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarSocials } from "./NavbarSocials";
import { NavbarToggle } from "./NavbarToggle";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  function navbarToggleHandler() {
    setIsActive((prev) => !prev);
  }

  return (
    <nav className={`nav ${isActive ? "nav__active" : ""}`}>
      <NavbarToggle onClick={navbarToggleHandler} isActive={isActive} />
      <ul className="nav__list">
        <NavbarLinks onClick={navbarToggleHandler} />
        <NavbarSocials onClick={navbarToggleHandler} />
      </ul>
    </nav>
  );
};
