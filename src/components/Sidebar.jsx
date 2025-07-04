import React from 'react';
import { FaHome, FaCalendarAlt, FaVideo, FaFolder, FaStickyNote, FaBook, FaClipboardList } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import '../App.css'
import Logo from '../assets/logo.jpeg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo}alt="Aghaaz Tech Logo" className="logo-image" />
        <div className="logo-text">
          <span>aghaaz</span>
          <em>Tech</em>
        </div>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#"><FaHome /> Dashboard</a></li>
          <li ><a href="#"><FaClipboardList /> Assignments</a></li>
          <li className="active"><a href="#"><FaCalendarAlt /> Schedule</a></li>
          <li><a href="#"><FaVideo /> Recordings</a></li>
          <li><a href="#"><FaFolder /> Resources</a></li>
          <li><a href="#"><FaStickyNote /> Notes</a></li>
          <li><a href="#"><FaBook /> Courses</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;  
