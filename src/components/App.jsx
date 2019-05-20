import React from 'react';
import Header from './Header';
import SplashPage from './SplashPage';
import SearchForm from './SearchForm';
import Gin from './Gin';
import Rum from './Rum';
import Vodka from './Vodka';
import {Switch, Route } from 'react-router-dom';

function App(){
  return(
    <div>
      <Header/>
      <SearchForm />
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

export default App;
