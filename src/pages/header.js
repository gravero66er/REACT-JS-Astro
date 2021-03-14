import React from "react";
import HeaderLogo from "../components/headerLogo";
import HeaderMenu from "../components/headerMenu";
import Particles from "react-particles-js";

function Header() {
  return (
    <div className="header">
      <Particles
        className="header__particles"
        params={{
          particles: {
            number: {
              value: 130,
            },
            size: {
              value: 2,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
