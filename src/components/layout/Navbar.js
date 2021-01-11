import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

const Navbar = ({ icon, title }) => {
  const { nominations } = useContext(GlobalContext);
  
  return (
    <header>
      <nav className="navbar bg-dark text-white px-5 justify-content-between">
        <h4>
        <Link className="text-white" to='/'><i className={icon}></i> {title}</Link>
        </h4>
        <ul className="list-unstyled d-flex align-items-center my-3">
          <li><Link className="text-white" to='/'>Home</Link></li>
          <li><Link className="btn btn-success mx-4" to="/Nominations"><span className="btn btn-danger btn-sm rounded-circle">{nominations.length}</span> Nominations</Link></li>
        </ul>         
      </nav>     
    </header>
  )
}

export default Navbar;