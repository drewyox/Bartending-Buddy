import React from 'react';
import PropTypes from 'prop-types';

function DrinkByIngredient(props) {
  return(
    <div>
      <h4>{props.name}</h4>
    </div>
  );
}

DrinkByIngredient.PropTypes = {
  name: PropTypes.string,
  key: PropTypes.number
}

export default DrinkByIngredient;
