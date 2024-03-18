import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-blue-100 py-4 px-36">
      <div>
        <Link to="/">Auth app</Link>
      </div>
      <div className="flex gap-6 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
