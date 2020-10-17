import React from "react";
import "./header.styles.scss";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { ReactComponent as LoginIcon } from "../../assets/login.svg";
import MenuOption from "../menu-option/menu-option.component";
import {
  getShowModalFromState,
  getUserFromState,
} from "../../redux/user/user.selector";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/user/user.action";
import { useHistory } from "react-router";

const Header: React.FC = () => {
  const showModal = useSelector(getShowModalFromState);
  const user = useSelector(getUserFromState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <div className="header">
      <div className="logo">RESONANCE PRIVATE</div>
      <div className="header-options">
        <p className="center greeting">
          Hi,{" "}
          <b>
            {user?.firstName || "Guest"} {user?.lastName}
          </b>
          .
        </p>
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
        {user?.id === undefined ? (
          <MenuOption onClick={showModal} option="login">
            <LoginIcon height="16px" width="16px" color="black" />
          </MenuOption>
        ) : (
          <MenuOption onClick={handleLogout} option="logout">
            <LoginIcon height="16px" width="16px" color="" />
          </MenuOption>
        )}
      </div>
    </div>
  );
};

export default Header;
