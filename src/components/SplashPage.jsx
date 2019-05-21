import React from 'react';
import '../sass/splash.scss';
import barBackground from '../assets/bar.jpg';

function SplashPage(){
  var backgroundBar = {
    height: '80vh',
    backgroundImage: `url(${barBackground})`,
    display: 'flex',
    alignItems: 'center',
  }
  return(
    <div style={backgroundBar}>
      <div className='introText'>
        <p>Welcome to The Bar, a place where you can search, upload and store your very own creative concoctions.</p>
      </div>
    </div>
  );
}

export default SplashPage;
