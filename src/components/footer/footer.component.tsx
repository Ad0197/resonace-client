import React from "react";
import "./footer.styles.scss";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p className="sign-copyright">Resonance e-commerce &copy; 2020. </p>
        <p>All Right Reserved.</p>
      </div>
      <div className="footer-icons">
        <FacebookIcon height="30px" fill="#E9A332" />
        <TwitterIcon height="30px" fill="#E9A332" />
        <InstagramIcon height="30px" fill="#E9A332" />
      </div>
    </div>
  );
};

export default Footer;
