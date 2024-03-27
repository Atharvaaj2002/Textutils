import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navbar(props){
   return(
        <nav className={`navbar navbar-expand-lg Navbar-${props.mode} bg-${props.mode} `}>
       <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <div className="container mx-3 my-2">
          <Link className={`nav-link active" aria-current="page" text-${props.mode==='light'?'dark':'light'} `} to="/">Home</Link>
          </div>
        </li>
        <li className="nav-item">   
        <div className="container mx-3 my-2">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`}to="/about"style={{ textDecoration: 'none' }}>About</Link>
          </div>
    </li> 
      </ul>   
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
</div>
    </div>
  </div>
</nav>
    )
}
Navbar.propTypes={title:PropTypes.string,
                   About:PropTypes.string}
    
Navbar.defualtProps={
    title: 'Set title here ',
    About:'tell about textutils'
}    
