import React from "react";
import HeaderLogo from "../components/headerLogo";
import HeaderMenu from "../components/headerMenu";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <HeaderLogo />
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
}

export default Footer;
