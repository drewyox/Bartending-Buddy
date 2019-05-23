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
    this.setState({nameResults: [] });
  }

  resetArrayonName() {
    this.setState({ingredientResults: []});
  }


  searchByIngredient(input){
    this.setState({ingredientResults: []});
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

    var text = {
      width: '60%',
      marginTop: '3vh',
      marginBottom: '4vh',
      marginLeft: '10vh',

    }

    var textRefine = {
      fontWeight: 'lighter'
    }

var row = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: '8vh',
  marginBottom: '10vh'
}

var border= {
  border: '1px solid grey',
  borderRadius: '3px',
  padding: '10px',
  width: '35%',

}
    return(
      <div>
        <div style={text}>
          <h3 style={textRefine}>Looking to expand your repertoire? Search by ingredient and then look up a name that grabs your eye!</h3><br></br>
          <h5 style={textRefine}>Or if you know what you're looking for, just search the name of a drink!</h5>
        </div>
        <div style={row}>
          <form style={border}>
              <label>
              Search By Ingredient:
                <input type='text' id='inputValue' ref='ingField'/>
              </label>
              <button type='submit' onClick={() =>{
                console.log(document.getElementById('inputValue').value);
                let input = document.getElementById('inputValue').value;
                this.searchByIngredient(input);
                this.clearField();
              }}>Search!</button>
          </form>

          <h4>Or</h4>
          <form style={border}>
            <label>
            Search By Name:
              <input type='text' id='inputValueName' ref='nameField'/>
            </label>
            <button type='submit' onClick={() =>{
              console.log(document.getElementById('inputValueName').value);
              let input = document.getElementById('inputValueName').value;
              this.searchByName(input);
              this.clearField();
            }}>Search!</button>
          </form>
        </div>
        <SearchResults nameArray={this.state.nameResults} ingredientArray={this.state.ingredientResults}/>
      </div>
    );
  }
}

export default SearchForm;
