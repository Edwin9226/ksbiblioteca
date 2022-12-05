import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const linkStyle = {
    padding: "10px",
    display: "block",
    fontSize: "18px",
    color: 'white',
    textDecoration:'none'
  };

  const navContainerStyle = {
    backgroundColor: "#181d27",
    padding: "10px",
    display: "flex",
    gap: "5px",
    justifyContent: "center",
  };
  return (
    <div style={navContainerStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/create" style={linkStyle}>CREATE</Link>
    </div>
  )
}

export default Navbar