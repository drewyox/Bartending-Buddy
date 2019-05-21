import React, {Component} from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import SplashPage from './SplashPage';
import SearchForm from './SearchForm';
import Whiskey from './Whiskey';
import Popular from './Popular';
import Rum from './Rum';
import Vodka from './Vodka';
import {Switch, Route } from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ingredientSearch: [],
      nameSearch: [],
    };
  }




  render(){
    return(
      <div>
        <Header searchByIngredient = {this.searchByIngredient}/>
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route path='/popular' component={Popular} />
          <Route path='/search' component={SearchForm}/>
          <Route path='/rum' component={Rum} />
          <Route path='/vodka' component={Vodka} />
          <Route path='/whiskey' component={Whiskey} />
        </Switch>
      </div>
    );
  }
}

export default App;
