import React from 'react';
import RecipeSummary from './RecipeSummary';
import { Link } from 'react-router-dom';



function RecipeList({recipes}){
  return(
    <div className='recipe-list section'>
      { recipes && recipes.map(recipe => {
        return (
          <Link to={'/recipe/'+ recipe.id}>
            <RecipeSummary recipe={recipe} key={recipe.id} />
          </Link>
        )
      })}
    </div>
  );
};

export default RecipeList;
