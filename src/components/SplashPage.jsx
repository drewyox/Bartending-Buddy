import React from 'react';
import '../sass/splash.scss';
import barBackground from '../assets/bar.jpg';

function SplashPage(){
  var backgroundBar = {
    height: '80vh',
    width: '100%',
    backgroundImage: `url(${barBackground})`,
    display: 'flex',
    alignItems: 'center',
  };
  var columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  var columnStyleR = {

  };
  var columnStyleL = {

  };
  return(
    <div>
      <div style={backgroundBar}>
        <div className='introText'>
          <p>Welcome to The Bar, a place where you can search, upload and store your very own creative concoctions.</p>
        </div>
      </div>
      <div style={columnStyle}>
        <div>
        Link to Drink Section Gin
        </div>
        <div>
        Link to Drink Section whiskey
        </div>
        <div>
        Link to Drink Section Rum
        </div>
        <div>
        Link to Drink Section Vodka
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
