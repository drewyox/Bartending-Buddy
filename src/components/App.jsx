import React from 'react';
import Header from './Header';
import SplashPage from './SplashPage';
import SearchForm from './SearchForm';
import {Switch, Route } from 'react-router-dom';

function App(){
  return(
    <div>
      <Header />
      <SearchForm />
      <SplashPage />
    </div>
  );
}

export default App;
