import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from './../store/actions/recipeActions';

class CreateRecipe extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      content: ''
    };
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.createRecipe(this.state)
    // console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add Your Recipe</h5>
          <div className="input-field">
            <label htmlFor="title">Name</label>
            <input type="text" id='title' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea name='' id='content' cols='30' rows='10' className='materialize-textarea' onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    createRecipe: (recipe) => dispatch(createRecipe(recipe))
  }
}

export default connect(null, mapDispatchToProps)(CreateRecipe);
