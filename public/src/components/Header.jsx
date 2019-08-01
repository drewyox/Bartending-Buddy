import React from 'react';
import '../sass/header.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Header(){



  return(
    <div>
      <div className='header'>
        <div>
          <Link to='/'>Home</Link>
        </div>
      </div>
    </div>

  );
}


export default Header;
