import React from 'react';
import PropTypes from 'prop-types';

function DrinkByName(props) {
  return(
    <div>
      <h2>{props.name}</h2>
      <h4>{props.ingredient1}</h4>
      <h4>{props.measure1}</h4>
      <h4>{props.ingredient2}</h4>
      <h4>{props.measure2}</h4>
      <h4>{props.ingredient3}</h4>
      <h4>{props.measure3}</h4>
      <h4>{props.ingredient4}</h4>
      <h4>{props.measure4}</h4>
      <h4>{props.ingredient5}</h4>
      <h4>{props.measure5}</h4>
      <h4>{props.ingredient6}</h4>
      <h4>{props.measure6}</h4>
      <h4>{props.ingredient7}</h4>
      <h4>{props.measure7}</h4>
      <h4>{props.ingredient8}</h4>
      <h4>{props.measure8}</h4>
      <h4>{props.ingredient9}</h4>
      <h4>{props.measure9}</h4>
      <h4>{props.ingredient10}</h4>
      <h4>{props.measure10}</h4>
      <h4>{props.ingredient12}</h4>
      <h4>{props.measure12}</h4>
      <h4>{props.ingredient13}</h4>
      <h4>{props.measure13}</h4>
      <h4>{props.ingredient14}</h4>
      <h4>{props.measure14}</h4>
      <h4>{props.ingredient15}</h4>
      <h4>{props.measure15}</h4>
      <h3>{props.instructions}</h3>
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
  ingredient11: PropTypes.string,
  ingredient12: PropTypes.string,
  ingredient13: PropTypes.string,
  ingredient14: PropTypes.string,
  ingredient15: PropTypes.string,
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
  measure11: PropTypes.string,
  measure12: PropTypes.string,
  measure13: PropTypes.string,
  measure14: PropTypes.string,
  measure15: PropTypes.string,
  key: PropTypes.number
}

export default DrinkByName;
