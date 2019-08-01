import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from './../store/actions/recipeActions';

class CreateRecipe extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      content: '',
      ing1: '',
      ing2: '',
      ing3: '',
      ing4: '',
      ing5: '',
      ing6: '',
      ing7: '',
      ing8: '',
      ing9: '',
      ing10: '',
      ing11: '',
      ing12: '',
      ing13: '',
      ing14: '',
      ing15: '',
      me1: '',
      me2: '',
      me3: '',
      me4: '',
      me5: '',
      me6: '',
      me7: '',
      me8: '',
      me9: '',
      me10: '',
      me11: '',
      me12: '',
      me13: '',
      me14: '',
      me15: '',
      instructions:'',

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
    this.props.createRecipe(this.state);
    alert("You've successfully added your recipe!")
    document.location.reload()
    // console.log(this.state);
  }
  render() {
    var row={
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space around'
    }
    var button={
      backgroundColor: '#64b5f6',
      width: 'auto',
      padding: '5px 10px 5px 10px',
      fontSize: '1.2em',
      color: 'white',
      fontWeight: 'lighter',
      border: 'none',
      marginBottom: '80px'

    }
    var title={
      marginTop: '60px',
      fontSize: '3.5em',
      paddingBottom: '5vh',
      fontWeight: 'lighter',
      color: '#64b5f6',
    }
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>

          <h5 style={title}>Add Your Recipe</h5>

          <div className="input-field">
            <label htmlFor="title">Name of Drink</label>
            <input type="text" id='title' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Description</label>
            <textarea name='' id='content' cols='30' rows='10' className='materialize-textarea' onChange={this.handleChange}></textarea>
          </div>

          <div className="input-field">
            <label htmlFor="title">Instructions for Preparing</label>
            <input type="text" id='instructions' onChange={this.handleChange} />
          </div>

          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 1</label>
              <input type="text" id='ing1' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 1</label>
              <input type="text" id='me1' onChange={this.handleChange} />
            </div>
          </div>
          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 2</label>
              <input type="text" id='ing2' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 2</label>
              <input type="text" id='me2' onChange={this.handleChange} />
            </div>
          </div>
          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 3</label>
              <input type="text" id='ing3' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 3</label>
              <input type="text" id='me3' onChange={this.handleChange} />
            </div>
          </div>
          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 4</label>
              <input type="text" id='ing4' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 4</label>
              <input type="text" id='me4' onChange={this.handleChange} />
            </div>
          </div>


          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 5</label>
              <input type="text" id='ing5' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 5</label>
              <input type="text" id='me5' onChange={this.handleChange} />
            </div>
          </div>

          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 6</label>
              <input type="text" id='ing6' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 6</label>
              <input type="text" id='me6' onChange={this.handleChange} />
            </div>
          </div>

          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 7</label>
              <input type="text" id='ing7' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 7</label>
              <input type="text" id='me7' onChange={this.handleChange} />
            </div>
          </div>

          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 8</label>
              <input type="text" id='ing8' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 8</label>
              <input type="text" id='me8' onChange={this.handleChange} />
            </div>
          </div>

          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 9</label>
              <input type="text" id='ing9' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 9</label>
              <input type="text" id='me9' onChange={this.handleChange} />
            </div>
          </div>

          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 10</label>
              <input type="text" id='ing10' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 10</label>
              <input type="text" id='me10' onChange={this.handleChange} />
            </div>
          </div>

          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 11</label>
              <input type="text" id='ing11' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 11</label>
              <input type="text" id='me11' onChange={this.handleChange} />
            </div>
          </div>

          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 12</label>
              <input type="text" id='ing12' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 12</label>
              <input type="text" id='me12' onChange={this.handleChange} />
            </div>
          </div>

          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 13</label>
              <input type="text" id='ing13' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 13</label>
              <input type="text" id='me13' onChange={this.handleChange} />
            </div>
          </div>

          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 14</label>
              <input type="text" id='ing14' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 14</label>
              <input type="text" id='me14' onChange={this.handleChange} />
            </div>
          </div>

          <div style={row}>
            <div className="input-field">
              <label htmlFor="title">Ingredient 15</label>
              <input type="text" id='ing15' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="title">Measurement 15</label>
              <input type="text" id='me15' onChange={this.handleChange} />
            </div>
          </div>


          <div className="input-field">
            <button style={button}>CREATE</button>
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
