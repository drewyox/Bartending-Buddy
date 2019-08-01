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
  var space_bottom = {
    marginTop: '5vh',
    marginBottom: '6vh',
    fontWeight: 'lighter',
    width: 'auto',
    padding: '10px',
    color: 'white',
    backgroundColor: '#64b5f6',
    marginLeft: '0px'
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
      <Link style={space_bottom} to='/contribute' className='right'>Create Recipe</Link>
    </div>
  );
};

export default RecipeList;
