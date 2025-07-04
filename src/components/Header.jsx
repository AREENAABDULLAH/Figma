import React from 'react';
import { FaSearch, FaBell, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="app-header">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" />
        <div className="search-filter">
          <span>F</span>
          <FaChevronDown />
        </div>
      </div>
      <div className="user-profile">
        <FaBell className="notification-icon" />
        <span>Hasnain</span>
        <img src="https://i.pravatar.cc/40?u=hasnain" alt="User Avatar" />
        <FaChevronDown />
      </div>
    </header>
  );
};

export default Header;