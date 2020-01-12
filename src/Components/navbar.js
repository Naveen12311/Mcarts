import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
return(
  

   <div className = "nav">
   <Link to="/">
   <div id="brand"><img src="logo.png" id="logo"/></div>
   <h3 id="name">MCART</h3>
   </Link>
   <ul>
       <Link to="/"><i className="fas fa-home"></i> HOME</Link>
       <Link to="/Products"><i className="fas fa-mobile"></i> PRODUCTS</Link>
       <Link to="/About"> <i className="fas fa-address-card"></i> ABOUT</Link>
       <Link to="/Cart"> <i className="fas fa-shopping-cart"></i> CART</Link>
   </ul>
   </div>
 
)
}

export default Navbar;