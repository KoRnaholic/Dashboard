import React from "react";
import NavItem from "./navItem";
import { nav } from "../../../data/nav";
import Logo from "./../../assets/logo";
import Settings from "../../dashboard/Settings";
const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="h-screen"
    >
      <Logo />
      <nav>
        <ul className="nav-col">
          {nav.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </nav>

      <Settings />
      <div />
    </header>
  );
};

export default Header;
