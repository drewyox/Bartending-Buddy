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
    flexDirection: 'column',
    backgroundAttachment: 'fixed'
  };
  var columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    marginTop: '13vh',
    marginBottom: '10vh',
    fontSize: '1.5em',
    width: '90vw'
  };
  var columnStyleR = {
    width: '60%',
    alignSelf: 'flex-start',
    marginBottom: '10vh',
    fontSize: '1.5em',
    borderBottom: '1px solid black'

  };
  var columnStyleL = {
    width: '38%',
    alignSelf: 'flex-end',
    marginBottom: '10vh',
    fontSize: '1.5em',
    borderBottom: '1px solid black',
    textAlign: 'right'
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

  var formatting = {
    margin: '0px',
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
            <p style={titleStyle} >Bartending Buddy</p>
          </div>
        </div>
      </div>
      <div style={columnStyle}>
        <div style={columnStyleR}>
          <span style={big}><Link to='/search'>Search</Link></span><p style={formatting}> through our database of established drink  recipes!</p>
        </div>
        <div style={columnStyleL}>
          <p style={formatting}>Browse our extensive user created</p> <span style={big}><Link to='/dashboard'>Drink Library</Link></span>
        </div>
        <div style={columnStyleR}>
          <Link style={big} to='/contribute'>Contribute</Link><p style={formatting}> to our ever growing library of unique drinks!</p>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
