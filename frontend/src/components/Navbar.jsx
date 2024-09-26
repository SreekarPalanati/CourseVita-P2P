// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#222",
    color: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoImgStyle = {
    height: "50px",
    marginRight: "15px",
    borderRadius: "50%",
  };

  const navLinksStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "25px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  };

  const hoverEffect = {
    color: "#f39c12",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#f39c12",
    borderRadius: "5px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverEffect = {
    backgroundColor: "#e67e22",
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <img src="PT.png" alt="Logo" style={logoImgStyle} />
        <Link to="/" style={{ ...linkStyle, fontSize: "24px", fontWeight: "bold" }}>
          OUR PROJECT
        </Link>
      </div>

      <ul style={navLinksStyle}>
        <li>
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/peermatching"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Peer Matching
          </Link>
        </li>
        <li>
          <Link
            to="/scheduler"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Scheduler
          </Link>
        </li>
        {/* <li>
          <Link
            to="/virtualmeeting"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Virtual Meeting
          </Link>
        </li> */}
        <li>
          <Link
            to="/progress"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Progress Tracking
          </Link>
        </li>
        <li>
          {/* Single Sign Up/Login Button */}
          <Link
            to="/login-signup"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverEffect.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Sign Up / Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
