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
  }

  render(){

    return(
      <div>
        <form>
          <label>
          Search By Ingredient:
            <input type='text' id='inputValue'/>
          </label>
          <button type='submit' onClick={() =>{
              console.log(document.getElementById('inputValue').value);
            let input = document.getElementById('inputValue').value;
            this.searchByIngredient(input);
            }}>Test</button>
        </form>
        <h2>Or</h2>
        <form>
          <label>
          Search By Name:
            <input type='text' id='inputValueName'/>
          </label>
          <button type='submit' onClick={() =>{
            console.log(document.getElementById('inputValueName').value);
          let input = document.getElementById('inputValueName').value;
          this.searchByName(input);
          }}>Test</button>
        </form>
        <SearchResults nameArray={this.state.nameResults} ingredientArray={this.state.ingredientResults}/>
      </div>
    );
  }
}

export default SearchForm;
