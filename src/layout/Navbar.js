import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


const Navbar = () => {

  var space ={
    marginLeft: '5vw',
  }

  return(
    <nav className='nav-wrapper amber accent-4'>
      <div className='container'>
        <Link to='/' className='brand-logo'>Home</Link>
        <NavLink style={space} to='/dashboard' className='right'>User Created Library</NavLink>
        <NavLink style={space} to='/search' className='right'>Drinks Database</NavLink>
        <NavLink style={space} to='/contribute' className='right'>Add Recipe</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
