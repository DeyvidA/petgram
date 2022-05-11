import React from "react";
import { Nav, Link } from "./styles";
import { MdHome, MdFavorite, MdPersonOutline } from "react-icons/md";

const SIZE = "32px";

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdFavorite />
      </Link>
      <Link to="/favs">
        <MdHome />
      </Link>
      <Link to="/login">
        <MdPersonOutline />
      </Link>
    </Nav>
  );
};
