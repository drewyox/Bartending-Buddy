import React from 'react';
import '../sass/splash.scss';
import barBackground from '../assets/bar.jpg';
import { Link } from 'react-router-dom';

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
    marginTop: '13vh',
  };
  var columnStyleR = {
    marginRight: '40vw',
    marginBottom: '10vw',
    textDecoration: 'none',

  };
  var columnStyleL = {
    marginLeft: '40vw',
    marginBottom: '10vw',
  };
  return(
    <div>
      <div style={backgroundBar}>
        <div className='introText'>
          <p>Welcome to The Bar, a place where you can search, upload and store your very own creative concoctions.</p>
        </div>
      </div>
      <div style={columnStyle}>
        <div style={columnStyleR}>
          <Link to='/popular'>Popular</Link>
        </div>
        <div style={columnStyleL}>
        Contribute
        </div>
        <div style={columnStyleR}>
        Search
        </div>
        <div style={columnStyleL}>
        User Library
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
