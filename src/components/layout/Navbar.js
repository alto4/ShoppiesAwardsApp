import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <header>
      <nav className="navbar bg-dark text-white px-5 justify-content-between">
        <h4>
        <Link className="text-white" to='/'><i className={icon}></i> {title}</Link>
        </h4>
        <ul className="list-unstyled d-flex align-items-center my-3">
          <li><Link className="text-white" to='/'>Home</Link></li>
          <li><Link className="text-white mx-4" to='/About'>About</Link></li>
          <li><Link className="btn btn-success" to="">Nominations</Link></li>
        </ul>         
      </nav>     
    </header>
  )
}

export default Navbar;