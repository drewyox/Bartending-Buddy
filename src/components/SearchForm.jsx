import React from  'react';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';

class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ingredientResults:[],
      nameResults:[],
    };
    this.searchByIngredient = this.searchByIngredient.bind(this);
    this.searchByName = this.searchByName.bind(this);
  }


  resetArrayonIngredient() {
    this.setState({nameResults: [] })
  }

  resetArrayonName() {
    this.setState({ingredientResults: []})
  }


  searchByIngredient(input){
    this.setState({ingredientResults: []})
    let inputVal = input;
    let dummyArray = [];
    let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputVal}`;
    fetch(url).then(response => response.json()).then(
      (json) => {
        let drinky = json.drinks;
        Object.keys(drinky).forEach((element) => {
          dummyArray.push(drinky[element]);

        });
        this.setState({ingredientResults: dummyArray});
        console.log(this.state.ingredientResults);
      }
    );
    this.resetArrayonIngredient();
  }

  searchByName(input){
    let dummyArrayName = [];
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
    fetch(url).then(response => response.json()).then(
      (json) => {
        let drinkyPoo = json.drinks;
        Object.keys(drinkyPoo).forEach((element) => {
          dummyArrayName.push(drinkyPoo[element]);
        });
        this.setState({nameResults: dummyArrayName});
        console.log(this.state.nameResults);
      }
    );
    this.resetArrayonName();
  }

  clearField(){
    this.refs.ingField.value='';
    this.refs.nameField.value='';
  }


  render(){

    return(
      <div>
        <form>
          <label>
          Search By Ingredient:
            <input type='text' id='inputValue' ref='ingField'/>
          </label>
          <button type='submit' onClick={() =>{
              console.log(document.getElementById('inputValue').value);
            let input = document.getElementById('inputValue').value;
            this.searchByIngredient(input);
            this.clearField();
            }}>Test</button>
        </form>
        <h2>Or</h2>
        <form>
          <label>
          Search By Name:
            <input type='text' id='inputValueName' ref='nameField'/>
          </label>
          <button type='submit' onClick={() =>{
            console.log(document.getElementById('inputValueName').value);
          let input = document.getElementById('inputValueName').value;
          this.searchByName(input);
          this.clearField();
          }}>Test</button>
        </form>
        <SearchResults nameArray={this.state.nameResults} ingredientArray={this.state.ingredientResults}/>
      </div>
    );
  }
}

export default SearchForm;
