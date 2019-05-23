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
    fontSize: '1.5em'
  };
  var columnStyleR = {
    marginRight: '40vw',
    marginBottom: '10vw',
    fontSize: '1.5em',
    borderBottom: '1px solid black'

  };
  var columnStyleL = {
    marginLeft: '40vw',
    marginBottom: '10vh',
    fontSize: '1.5em',
    borderBottom: '1px solid black'
  };

  var titleStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '6em',
    fontFamily: 'Brush Script MT , cursive',
    color: 'white',
    backgroundColor:'rgba(0,0,0,.63)',
    height: '200px',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '15px'
  }


  var big ={
    fontSize: '2em',
    fontWeight: 'lighter'
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
        <div style={columnStyleR}>
          <span style={big}><Link to='/search'>Search</Link></span><p> through our database of established drink  recipes!</p>
        </div>
        <div style={columnStyleL}>
          <p>Browse our extensive user created</p> <span style={big}><Link to='/dashboard'>Drink Library</Link></span>
        </div>
        <div style={columnStyleR}>
          <Link style={big} to='/contribute'>Contribute</Link><p> to our ever growing libray of unique drinks!</p>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
