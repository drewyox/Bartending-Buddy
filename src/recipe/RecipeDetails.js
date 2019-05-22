import React from 'react';

const RecipeDetails = (props) => {

  const id = props.match.params.id;

  return(
    <div className='container section recipe-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Recipe Title - {id}</span>
          <p>Lorem ipsum a;sljd dfkiri trounc fodiej iditttk dfdjitheisoldfidi slsdfiinsio dsngiudsdhgiufg </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by: Blank</div>
          <div>Date</div>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetails;
