import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <header className="header">
      <div className="logo">GrapgQL Challenge</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Nation</Link>
          </li>
          <li>
            <Link to="/new">Add Nation</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
