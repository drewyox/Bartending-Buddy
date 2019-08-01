import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


const RecipeDetails = (props) => {

  var row={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '2vh',
    marginTop: '2vh',
    alignItems: 'baseline',
  }

  var name={
    marginTop: '60px',
    fontSize: '3.5em',
    paddingBottom: '5vh',
    fontWeight: 'lighter',
    color: '#64b5f6',
    borderBottom: '1px solid black'
  }

  var padding = {
    width: '40%',
    border: '1px solid #64b5f6',
    borderRadius: '5px',
    padding: '0px 10px 10px 10px'

  }
  var padding2 = {
    marginBottom: '10vh',
    marginTop: '3vh',
    width: '100%'
  }

  var ing = {
    fontSize: '2em',
    fontWeight: 'lighter',
    paddingRight: '1vw'
  }

  const { recipe } = props;
  if(recipe){
    return(
    <div className='container section recipe-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span style={name} className='card-title'>{ recipe.title }</span>
          <h5 style={padding2}>{ recipe.content }</h5>
          <div style={row}>
            <div>
              <div style={row}>
                <p style={ing}>{ recipe.ing1}</p> <p>{recipe.me1}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing2}</p> <p>{recipe.me2}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing3}</p> <p>{recipe.me3}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing4}</p> <p>{recipe.me4}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing5}</p> <p>{recipe.me5}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing6}</p> <p>{recipe.me6}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing7}</p> <p>{recipe.me7}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing8}</p> <p>{recipe.me8}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing9}</p> <p>{recipe.me9}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing10}</p> <p>{recipe.me10}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing11}</p> <p>{recipe.me11}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing12}</p> <p>{recipe.me12}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing13}</p> <p>{recipe.me13}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing14}</p> <p>{recipe.me14}</p>
              </div>
              <div style={row}>
                <p style={ing}>{ recipe.ing15}</p> <p>{recipe.me15}</p>
              </div>
            </div>

            <div style={padding}>
              <span><h5><strong>Instructions</strong></h5></span>
              <p>{ recipe.instructions }</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
else{
  return(
    <div className='container center'>
      <p>Loading...</p>
    </div>
  )
}



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

function mapStateToProps(state, ownProps){
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null
  return{
    recipe: recipe
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'recipes' }
  ])
)(RecipeDetails);
