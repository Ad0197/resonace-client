import React from "react";
import "./header.styles.scss";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import MenuOption from "../menu-option/menu-option.component";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">RESONANCE PRIVATE</div>
      <div className="header-options">
        <MenuOption path="/" option="Home">
          <HomeIcon height="16px" color="black" />
        </MenuOption>
        <MenuOption path="/profile" option="Profile">
          <ProfileIcon height="16px" color="black" />
        </MenuOption>
        <MenuOption path="/search" option="Search">
          <SearchIcon height="16px" color="black" />
        </MenuOption>
        <MenuOption path="/cart" option="Cart">
          <CartIcon height="16px" color="black" />
        </MenuOption>
        <MenuOption path="/login" option="login"></MenuOption>
      </div>
    </div>
  );
};

export default Header;
