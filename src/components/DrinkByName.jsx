import React from 'react';
import PropTypes from 'prop-types';

function DrinkByName(props) {


  var row = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '50px',
    justifyContent: 'center',
    position: 'static',
    padding: '10px 0px 10px 0px'

  }
  var row2 = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '0px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'left'
  }

  var column = {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    padding: '15px',
    alignItems: 'left',
    justifyContent: 'center'
  }

  var columnHead = {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    padding: '15px',
    alignItems: 'left',
    justifyContent: 'flex-start'
  }

  var big = {
    fontSize: '3em',
    marginBottom: '1.1em',
    fontWeight: 'lighter',
    color: '#64b5f6'
  }

  var info = {
    fontSize: '1.1em',
    fontWeight: 'lighter',
  }

  var imgFor = {
    height: '300px',
    width: '300px',
    borderRadius: '3px'
  }

  var mesSur = {
    fontSize: '.8em',
    fontWeight: 'bold',
    paddingLeft: '4px',
    alignSelf: 'flex-end',
    height: 'auto',
    margin: '0px',
    marginBottom: '3px',
    textAlign: 'left'
  }
  var ing = {
    fontSize: '1.1em',
    fontWeight: 'lighter',
    margin: '0px',
    textAlign: 'left'
  }
  var formatting = {
    verticalAlign: 'top'
  }

  return(
    <div style={row} className='z-depth-3'>
      <div style={columnHead}>
        <div style={formatting}>
          <p style={big}>{props.name}</p>
          <div style={row2}>
            <p style={ing}>{props.ingredient1} </p>
            <p style={mesSur}> {props.measure1}</p>
          </div>

          <div style={row2}>
            <p style={ing}>{props.ingredient2} </p>
            <p style={mesSur}> {props.measure2}</p>
          </div>

          <div style={row2}>
            <p style={ing}>{props.ingredient3} </p>
            <p style={mesSur}> {props.measure3}</p>
          </div>

          <div style={row2}>
            <p style={ing}>{props.ingredient4} </p>
            <p style={mesSur}> {props.measure4}</p>
          </div>

          <div style={row2}>
            <p style={ing}>{props.ingredient5} </p>
            <p style={mesSur}> {props.measure5}</p>
          </div>

          <div style={row2}>
            <p style={ing}>{props.ingredient6} </p>
            <p style={mesSur}> {props.measure6}</p>
          </div>

          <div style={row2}>
            <p style={ing}>{props.ingredient7} </p>
            <p style={mesSur}> {props.measure7}</p>
          </div>

          <div style={row2}>
            <p style={ing}>{props.ingredient8} </p>
            <p style={mesSur}> {props.measure8}</p>
          </div>

          <div style={row2}>
            <p style={ing}>{props.ingredient9} </p>
            <p style={mesSur}> {props.measure9}</p>
          </div>

          <div style={row2}>
            <p style={ing}>{props.ingredient10} </p>
            <p style={mesSur}> {props.measure10}</p>
          </div>
        </div>
      </div>

      <div style={column}>
        <p style={info}>{props.instructions} </p>
      </div>
      <div style={column}>
        <img className='valign-wrapper' style={imgFor} src={props.picture}></img>
      </div>

    </div>
  );
}

DrinkByName.PropTypes = {
  name: PropTypes.string,
  instructions: PropTypes.string,
  ingredient1: PropTypes.string,
  ingredient2: PropTypes.string,
  ingredient3: PropTypes.string,
  ingredient4: PropTypes.string,
  ingredient5: PropTypes.string,
  ingredient6: PropTypes.string,
  ingredient7: PropTypes.string,
  ingredient8: PropTypes.string,
  ingredient9: PropTypes.string,
  ingredient10: PropTypes.string,
  measure1: PropTypes.string,
  measure2: PropTypes.string,
  measure3: PropTypes.string,
  measure4: PropTypes.string,
  measure5: PropTypes.string,
  measure6: PropTypes.string,
  measure7: PropTypes.string,
  measure8: PropTypes.string,
  measure9: PropTypes.string,
  measure10: PropTypes.string,
  picture: PropTypes.string,
  key: PropTypes.number
};

export default DrinkByName;
