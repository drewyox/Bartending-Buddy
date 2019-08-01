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
    this.idHelper = this.idHelper.bind(this);
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
      dummyArray.forEach((element) => {
        this.idHelper(element.idDrink);
      })
      this.setState({ingredientResults: dummyArray});
      console.log(this.state.ingredientResults);
      }
    );
    this.resetArrayonIngredient();
  }

idHelper(input){
  let dummyArray = [];
  let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${input}`;
  fetch(url).then(response => response.json()).then(
    (json) => {
      let drinkFID = dummyArray.push(json.drinks);

      console.log(drinkFID);
    }
  );
  console.log(dummyArray);
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
    this.refs.nameField.value='';
  }


  render(){

    var text = {
      width: '60%',
      margin: 'auto',
      marginTop: '120px',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center'
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
          <h3 style={textRefine}>Enter a cocktail below to find your recipe!</h3><br></br>
        </div>
        <div style={row}>
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
