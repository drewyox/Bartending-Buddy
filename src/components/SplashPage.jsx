import React from 'react';
import Whiskey from './Whiskey';
import Gin from './Gin';
import Rum from './Rum';
import Vodka from './Vodka';
import '../sass/splash.scss';
import {Switch, Route } from 'react-router-dom';

function SplashPage(){
  return(
    <div>
      <div className='introText'>
        <p>This will be a section that introduces what the site is exactly and how to use it.</p>
      </div>
      <div className='routeContainer'>
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route path='/gin' component={Gin} />
          <Route path='/rum' component={Rum} />
          <Route path='/vodka' component={Vodka} />
          <Route path='/whiskey' component={Whiskey} />
        </Switch>
      </div>
    </div>
  );
}

export default SplashPage;
