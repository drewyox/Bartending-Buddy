import React from 'react';
import Header from './Header';
import SplashPage from './SplashPage';
import Whiskey from './Whiskey';
import Gin from './Gin';
import Rum from './Rum';
import Vodka from './Vodka';
import {Switch, Route } from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route path='/gin' component={Gin} />
          <Route path='/rum' component={Rum} />
          <Route path='/vodka' component={Vodka} />
          <Route path='/whiskey' component={Whiskey} />
        </Switch>
      </div>
    );
  }
}

export default App;
