"use client";
import { useState } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarSocials } from "./NavbarSocials";
import { NavbarToggle } from "./NavbarToggle";
import { SourcePicture } from "../_shared/SourcePicture";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  function navbarToggleHandler() {
    setIsActive((prev) => !prev);
  }

  return (
    <nav className={`nav ${isActive ? "nav__active" : ""}`}>
      {/* <NavbarToggle onClick={navbarToggleHandler} isActive={isActive} /> */}
      <div className="nav__inner">
        <div className="logo">
          <SourcePicture
            path="logo_dd.png"
            alt="Logo D&D Bezpieczna Przystań"
          />
        </div>
        <ul className="nav__list">
          <NavbarLinks onClick={navbarToggleHandler} />
          <NavbarSocials onClick={navbarToggleHandler} />
        </ul>
      </div>
    </nav>
  );
};
