import React, {Component} from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import SplashPage from './SplashPage';
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


  componentWillMount(){
    this.searchByIngredient();
  }

  searchByIngredient() {
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni';
    fetch(url).then(response => response.json()).then(
      (json) => {
        let drinky = json.drinks;
        console.log(json);
        Object.keys(drinky).forEach((element) => {
          console.log(drinky[element].idDrink);
        })
        }
    );
  }

  searchByName(){

  }




  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route path='/popular' component={Popular} />
          <Route path='/rum' component={Rum} />
          <Route path='/vodka' component={Vodka} />
          <Route path='/whiskey' component={Whiskey} />
        </Switch>
      </div>
    );
  }
}

export default App;
