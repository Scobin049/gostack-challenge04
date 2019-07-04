import React, { Component } from "react";

import "./Header.css";
import facebook from "../assets/facebook.png";
import profile from "../assets/profile.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={facebook} width="120" />
        <div className="header-profile">
          <p>Meu perfil</p>
          <img src={profile} width="25" height="25" />
        </div>
      </div>
    );
  }
}

export default Header;
