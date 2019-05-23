import React from 'react';
import RecipeSummary from './RecipeSummary';
import { Link } from 'react-router-dom';



function RecipeList({recipes}){

  var space = {
    marginTop: '5vh',
    marginBottom: '6vh',
    fontWeight: 'lighter',
    width: '100%'
  }
  return(
    <div>
      <h3 style={space}>Click a drink below to learn more!</h3>
      <div className='recipe-list section'>
        { recipes && recipes.map(recipe => {
          return (
            <Link to={'/recipe/'+ recipe.id}>
              <RecipeSummary recipe={recipe} key={recipe.id} />
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default RecipeList;
