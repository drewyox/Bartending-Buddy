import React from 'react';
import Header from './Header';
import SplashPage from './SplashPage';
import {Switch, Route } 'react-router-dom';

function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={SplashPage} />
      </Switch>
    </div>
  );
}

export default App;
