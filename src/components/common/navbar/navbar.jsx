import React from 'react';
import InputBox from './InputBox';
import logo from '../assets/logo.png'; // Replace with your actual logo
import userIcon from '../assets/user.png'; // Optional
import './Navbar.css';

const Navbar = ({ search, setSearch }) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="brand-title">AlphaMovies</h1>
      </div>

      {/* Center: Search Box */}
      <div className="navbar-center">
        <InputBox handlerChange={handleSearchChange} val={search} />
      </div>

      {/* Right: Optional Icon or Links */}
      <div className="navbar-right">
        <img src={userIcon} alt="User" className="user-icon" />
      </div>
    </header>
  );
};

export default Navbar;
