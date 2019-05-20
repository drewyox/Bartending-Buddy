import React from 'react';
import '../sass/header.scss';
import Link from 'react-router-dom';

function Header(
){
  return(
    <div>
      <div className='header'>
        <div>
          <p>Home Icon/button</p>
          <Link to="/"> Home </Link>
        </div>
        <p>Search Bar</p>
      </div>
    </div>

  );
}

export default Header;
