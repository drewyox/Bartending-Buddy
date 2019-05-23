import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
  return(
    <ul className='right'>
      <li><NavLink to='/contribute'>New Recipe</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating brown'>DY</NavLink></li>
    </ul>

  );
};

export default SignedInLinks;
