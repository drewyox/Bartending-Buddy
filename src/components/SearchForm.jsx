import React from  'react';
import PropTypes from 'prop-types';


class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input:'',
    };
  }


  searchByIngredient(input){
    let inputVal = input;
    console.log(inputVal);
    let dummyArray = [];
    let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputVal}`;

    fetch(url).then(response => response.json()).then(
      (json) => {
        let drinky = json.drinks;
        Object.keys(drinky).forEach((element) => {
          console.log(drinky[element]);
          dummyArray.push(drinky[element]);
        });
        console.log(dummyArray);
      }
    );
  }

  searchByName(){
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni';
    fetch(url).then(response => response.json()).then(
      (json) => {
        let drinkyPoo = json.drinks;
        Object.keys(drinkyPoo).forEach((element) => {
          console.log(drinkyPoo[element]);
        });
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
      </div>

    );
  }
}

SearchForm.PropTypes = {

};

export default SearchForm;
