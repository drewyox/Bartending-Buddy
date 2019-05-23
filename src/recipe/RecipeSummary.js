import React from 'react';


function RecipeSummary({recipe}){
  return(
    <div className='card z-depth-0 recipe-summary'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{recipe.title}</span>

        <p>Posted by: BLANK </p>
        <p className='grey-text'>Date</p>
      </div>
    </div>
  );
};

export default RecipeSummary;
