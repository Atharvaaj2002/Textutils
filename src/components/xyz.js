

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar=( props)=>{
const  { title, mode, toggleMode } =props;
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <div className="container my-3">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
              </div>
            </li>
            <li className="nav-item">
            
              <NavLink className={`"nav-link" to="/about" text-${props.mode==='light'?'dark':'light'}`}>
                About
              </NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div className="ms-auto">
          {/* 'ms-auto' class pushes the following content to the right */}
          <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onChange={toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
  
};

export default Navbar;
