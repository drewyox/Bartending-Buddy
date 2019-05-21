import React from 'react';
import '../sass/header.scss';
import Link from 'react-router-dom';
import SearchForm from './SearchForm';

function Header(
){
  return(
    <div>
      <div className='header'>
        <div>
          <p>Home Icon/button</p>
        </div>
        <SearchForm />
      </div>
    </div>

  );
}

export default Header;
