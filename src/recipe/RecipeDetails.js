import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


const RecipeDetails = (props) => {

  var row={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space around'
  }
  const { recipe } = props;
  if(recipe){
    return(
    <div className='container section recipe-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>{ recipe.title }</span>
          <h5>{ recipe.content }</h5>
          <div className='card-action grey lighten-4 grey-text'>
            <div>Posted by: { recipe.authorFirstName } { recipe.authorLastName }</div>
            <div>Date</div>
          </div>
        </div>
        <p>{ recipe.instructions }</p>
        <div style={row}>
          <p>{ recipe.ing1} {recipe.me1}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing2} {recipe.me2}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing3} {recipe.me3}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing4} {recipe.me4}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing5} {recipe.me5}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing6} {recipe.me6}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing7} {recipe.me7}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing8} {recipe.me8}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing9} {recipe.me9}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing10} {recipe.me10}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing11} {recipe.me11}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing12} {recipe.me12}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing13} {recipe.me13}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing14} {recipe.me14}</p>
        </div>
        <div style={row}>
          <p>{ recipe.ing15} {recipe.me15}</p>
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
