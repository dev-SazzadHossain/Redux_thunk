import React from "react";
import blogger from "../../assets/blogger.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <!-- navbar start  --> */}
      <nav className="py-4 border-b">
        <div className="navbar-container">
          {/* <!-- logo --> */}
          <div className="logo">
            <Link to="/">
              <img
                style={{
                  width: "50px",
                  objectFit: "cover",
                  height: "50px",
                }}
                src={blogger}
                alt="search"
              />
            </Link>
          </div>
          {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
          <div className="auth-buttons">
            <button className="btn btn-primary">sign in</button>
            <button className="btn btn-outline">sign up</button>
          </div>
        </div>
      </nav>
      {/* <!-- navbar end  --> */}
    </div>
  );
};

export default Navbar;
