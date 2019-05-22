import React, {Component} from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import SplashPage from './SplashPage';
import SearchForm from './SearchForm';
import Dashboard from '../dashboard/Dashboard';
import Navbar from '../layout/Navbar';
import {Switch, Route } from 'react-router-dom';
import RecipeDetails from '../recipe/RecipeDetails';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

function App(){

    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/search' component={SearchForm}/>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/recipe/:id' component={RecipeDetails} />
        </Switch>
      </div>
    );
  }

export default App;
