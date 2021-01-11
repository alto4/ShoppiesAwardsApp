import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

const Navbar = ({ icon, title }) => {
  const { nominations } = useContext(GlobalContext);
  
  return (
    <header>
      <nav className="navbar px-5 justify-content-between">
        <h4>
        <Link to='/'><i className={icon}></i> {title}</Link>
        </h4>
        <ul className="nav-links">
          <li><Link to='/'>Home</Link></li>
          <li><Link className="btn btn-success mx-4" to="/Nominations"><span className="btn btn-danger btn-sm rounded-circle">{nominations.length}</span> Nominations</Link></li>
        </ul>         
      </nav>     
    </header>
  )
}

export default Navbar;