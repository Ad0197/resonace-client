import React from "react";
import "./header.styles.scss";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { useHistory } from "react-router";

const Header = (props: any) => {
  const history = useHistory();
  const changeRoute = (path: string) => () => history.push(path);
  return (
    <div className="header">
      <div className="logo">RESONANCE PRIVATE</div>
      <div className="header-options">
        <button className="option" onClick={changeRoute("/")}>
          <HomeIcon height="16px" color="black" />
          <p className="text-option">Home</p>
        </button>
        <button className="option" onClick={changeRoute("/profile")}>
          <ProfileIcon height="16px" color="black" />
          <p className="text-option">Profile</p>
        </button>
        <button className="option">
          <SearchIcon height="16px" color="black" />
          <input className="text-option" placeholder="Search" />
        </button>
        <button className="option">
          <CartIcon height="16px" color="black" />
          <p className="text-option">Cart</p>
        </button>
        <button className="option">
          <p>Login</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
