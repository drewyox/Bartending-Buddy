import React from 'react';
import '../sass/splash.scss';
import barBackground from '../assets/barb.jpg';
import { Link } from 'react-router-dom';


function SplashPage(){
  var backgroundBar = {
    height: '80vh',
    width: '100%',
    backgroundImage: `url(${barBackground})`,
    display: 'flex',
    flexDirection: 'column'
  };
  var columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '13vh',
    marginBottom: '10vh',
  };
  var columnStyleR = {
    marginRight: '40vw',
    marginBottom: '10vw',
    textDecoration: 'none',

  };
  var columnStyleL = {
    marginLeft: '40vw',
    marginBottom: '10vh',
  };

  var titleStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '8em',
    fontFamily: 'Brush Script MT , cursive',
    color: 'white',
    backgroundColor:'rgba(0,0,0,.63)',
    height: '200px',
    paddingLeft: '20px',
    paddingRight: '20px'
  }
    var fix = {
      display: 'flex',
      alignItems: 'start',
    }


  var round = {
    borderRadius: '10px',
  }


  return(
    <div>
      <div style={backgroundBar}>
        <div style={columnStyle}>
          <div className='center-align' >
            <p style={titleStyle} >Liquor Library</p>
          </div>
        </div>
      </div>
      <div style={columnStyle}>
        <span><Link to='/search'>Search</Link></span>
        <Link to='/dashboard'>Drink Library</Link>
        <Link to='/contribute'>Contribute</Link>
      </div>
    </div>
  );
}

export default SplashPage;
