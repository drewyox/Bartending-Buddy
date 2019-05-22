import React from 'react';
import RecipeSummary from './RecipeSummary';



const RecipeList = () => {
  return(
    <div className='recipe-list section'>
      <RecipeSummary />
      <RecipeSummary />
      <RecipeSummary />
    </div>
  );
};

export default RecipeList;
