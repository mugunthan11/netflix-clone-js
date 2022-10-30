import React, { useState, useEffect } from "react";
import "../styles/Nav.css";

const Nav = () => {
  const [show, setShowNav] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div class={`nav ${show && "nav__black"}`}>
      <div class="nav__contents">
        <img
          class="nav__logo"
          src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
          alt=""
        />
        <img
          class="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
