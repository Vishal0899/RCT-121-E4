import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link style={{ marginRight: "1rem" }} to="/">
        Home
      </Link>
      {/* <Link style={{ marginRight: "1rem" }} to="/company">
        Company
      </Link>
      <Link style={{ marginRight: "1rem" }} to="/employee">
        Employee
      </Link> */}
    </div>
  );
};
