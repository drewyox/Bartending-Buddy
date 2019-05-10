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
        <p>This will be a section that introduces what the site is exactly and how to use it.</p>
      </div>
      <div className='routeContainer'>
        <Whiskey/>
        // A clickable link to display the chosen drinks category section as well as search within the category and add to the category with a form
        <Rum/>
        <Gin/>
        <Vodka/>
      </div>
    </div>
  );
}

export default SplashPage;
