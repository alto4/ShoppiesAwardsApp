import React, { useContext } from 'react';

const Footer = () => {

  return (
    <footer className="footer">
      <h5><i className="fa fa-copyright"> The Shoppies, 2021.</i></h5>
      <div className="footer-icons">
        <ul>
          <li><a href="https://github.com/alto4/ShoppiesAwardsApp" target="_blank"><i className="fa fa-github fa-2x"></i></a></li>
          <li><a href="https://alto4.github.io/AltcademyPortfolio/" target="_blank"><i className="fa fa-code fa-2x"></i></a></li>
          <li><a href="https://www.linkedin.com/in/scott-alton-6454b4190/" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a></li>
        </ul>
      </div>
    </footer>    
  )
}

export default Footer;