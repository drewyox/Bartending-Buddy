import React from 'react';
import PropTypes from 'prop-types';

function DrinkByIngredient(props) {
  var organize = {
    marginLeft: '40px',
    marginTop:'10px',
    padding: '15px',
    width: '80vw',
    paddingLeft: '1vw',
    borderLeft: '5px solid #64b5f6'
  };


  var blockquote={
      paddingLeft: '1vw',
      borderLeft: '5px solid #64b5f6'
    }

  return(
    <div style={organize} className='z-depth-3'>
      <h4>{props.name}</h4>
    </div>
  );
}

DrinkByIngredient.PropTypes = {
  name: PropTypes.string,
  key: PropTypes.number
};

export default DrinkByIngredient;
