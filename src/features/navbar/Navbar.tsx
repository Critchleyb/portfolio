import React from "react";
import "./navbar.scss";
import {
  faCode,
  faHome,
  faFileCode,
  faAddressCard,
  faMale,
} from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <ul>
          <li>
            <NavbarItem faIcon={faHome} name={"Summary"} linkPath={"/"} />
          </li>
          <li>
            <NavbarItem
              faIcon={faMale}
              name={"About Me"}
              linkPath={"/aboutme"}
            />
          </li>
          <li>
            <NavbarItem faIcon={faCode} name={"Skills"} linkPath={"/skills"} />
          </li>
          <li>
            <NavbarItem
              faIcon={faFileCode}
              name={"Projects"}
              linkPath={"/projects"}
            />
          </li>
          <li>
            <NavbarItem
              faIcon={faAddressCard}
              name={"Contact"}
              linkPath={"/contact"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}