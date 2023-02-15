import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Nav = () => {
  return <div>
    <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand brand-name" to='/'>HRB NEWSTECH</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i
        className="fas fa-bars fa-1x"></i></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav" >
        <li className="nav-item">
          <NavLink exact className="nav-link " activeClassName="nav_active" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="nav_active" to='/business'>Business</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="nav_active" to='/health'>Health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="nav_active" to='/entertainment'>Entertainment</NavLink>
        </li><li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="nav_active" to='/science'>Science</NavLink>
        </li> <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="nav_active" to='/sports'>Sports</NavLink>
        </li><li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="nav_active" to='/technology'>Technology</NavLink>
        </li> <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="nav_active" to='/privacypolicy'>PrivayPolicy</NavLink>
        </li>  <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="nav_active" to='/desclaimers'>Desclaimers</NavLink>
        </li>    <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="nav_active" to='/contactus'>Contactus</NavLink>
        </li> <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="nav_active" to='/aboutus'>Aboutus</NavLink>
        </li>        

      </ul>
    </div>
  </div>
</nav>
</div>
</div>
  </div>
  </div>
};

export default Nav;
