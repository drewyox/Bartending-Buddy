import React from 'react';
import Whiskey from './Whiskey';
import Gin from './Gin';
import Rum from './Rum';
import Vodka from './Vodka';
import '../sass/splash.scss';


function SplashPage(){
  return(
    <div>
      <div className='introText'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='routeContainer'>
        <Whiskey/>
        <Rum/>
        <Gin/>
        <Vodka/>
      </div>
    </div>
  );
}

export default SplashPage;
