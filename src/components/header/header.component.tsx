import React from "react";
import "./header.styles.scss";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { ReactComponent as LoginIcon } from "../../assets/login.svg";
import MenuOption from "../menu-option/menu-option.component";
import { getShowModalFromState } from "../../redux/user/user.selector";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const showModal = useSelector(getShowModalFromState)
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
        <MenuOption onClick={showModal} path="/login" option="login">
          <LoginIcon height="16px" width="16px" color="black" />
        </MenuOption>
      </div>
    </div>
  );
};

export default Header;
