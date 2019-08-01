import React from 'react';


function RecipeSummary({recipe}){
  var blockquote={
      paddingLeft: '1vw',
      borderLeft: '5px solid #64b5f6'
    }

    var divide={
      borderBottom: '1px solid #000'
    }
  return(
    <div style={divide} className='card z-depth-0 recipe-summary'>
        <div style={blockquote} className='card-content grey-text text-darken-3'>
          <span className='card-title'>{recipe.title}</span>
        </div>

    </div>
  );
};

export default RecipeSummary;
