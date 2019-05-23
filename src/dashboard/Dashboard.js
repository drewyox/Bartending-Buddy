import React, { Component } from 'react';
import RecipeList from '../recipe/RecipeList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render(){
    // console.log(this.props);
    const { recipes } = this.props;


    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'><RecipeList recipes={recipes}/></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state);
  return{
    recipes: state.firestore.ordered.recipes
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(Dashboard);
