import React from 'react';
import Logo from "../foto/anasayfa.jpg";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img className="img" src={Logo} />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/Menü">Menü</Link>
        <Link to="/About">Hakkında</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  )
}
export default Navbar;
