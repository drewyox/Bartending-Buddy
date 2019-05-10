import React from 'react';
import Whiskey from './Whiskey'
import Gin from './Gin'
import Rum from './Rum'
import Vodka from './Vodka'


function SplashPage(){
  return(
    <div>
      <p>Spalsh Works!</p>
      <Whiskey/>
      <Rum/>
      <Gin/>
      <Vodka/>
    </div>
  );
}

export default SplashPage;
