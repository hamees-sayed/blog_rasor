import React from "react";
import logo from "../images/Rasor_logo_blog.png"

const Header = () => {
  return (
    <div class="nav">
      <img class="nav--logo_icon" src={logo} alt="logo" />
      <div CLASS="nav--header--text">
        <h2 class="heading">RAMANUJAN SOCIETY FOR RESEARCH</h2>
        <p class="subheading">IIT MADRAS BS DEPARTMENT</p>  
      </div>  
    </div>
  );
};

export default Header;