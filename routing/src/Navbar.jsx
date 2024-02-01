import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="kk">
        <Link to="/home">Kalvium💙</Link>
        </div>
        <div className="side">
        <Link to="/contacts">Contacts</Link>
        <Link to="/about">About</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;