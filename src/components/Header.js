import React from "react";
import Logo from "./logo.png";

const Header = ({ user, onChange }) => (
  <div className="d-sm-flex align-items-sm-center justify-content-sm-between bg-primary text-white text-center p-3">
    <div className="d-sm-flex align-items-sm-center">
      <img src={Logo} alt="Checklist Logo" width="64px" />
      <h4 className="p-3">{user.length > 0 ? `${user}'s` : null} To Do List</h4>
    </div>

    <input
      onChange={onChange}
      className="rounded-pill border-0 text-center w-auto h-auto"
      placeholder="Your name here"
    />
  </div>
);

export default Header;
