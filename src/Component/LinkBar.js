import React from 'react';
import {Link} from 'react-router-dom';

function LinkBar() {
  return (
    <div >
    <nav >
        <Link to="/">Home</Link>
        <Link to="/services">Service</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/about">About</Link>

    </nav>
     
    </div>
  );
}

export default LinkBar;