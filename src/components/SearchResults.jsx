import React from 'react';
import PropTypes from 'prop-types';
import DrinkByName from './DrinkByName';
import DrinkByIngredient from './DrinkByIngredient';



function SearchResults(props){

  return(
    <div>
      <div>
        {Object.keys(props.nameArray).map(function(drinkId){
          var drink = props.nameArray[drinkId];
          return <DrinkByName
            name={drink.strDrink}
            ingredient1={drink.strIngredient1}
            ingredient2={drink.strIngredient2}
            ingredient3={drink.strIngredient3}
            ingredient4={drink.strIngredient4}
            ingredient5={drink.strIngredient5}
            ingredient6={drink.strIngredient6}
            ingredient7={drink.strIngredient7}
            ingredient8={drink.strIngredient8}
            ingredient9={drink.strIngredient9}
            ingredient10={drink.strIngredient10}
            ingredient11={drink.strIngredient11}
            ingredient12={drink.strIngredient12}
            ingredient13={drink.strIngredient13}
            ingredient14={drink.strIngredient14}
            ingredient15={drink.strIngredient15}
            measure1={drink.strMeasure1}
            measure2={drink.strMeasure2}
            measure3={drink.strMeasure3}
            measure4={drink.strMeasure4}
            measure5={drink.strMeasure5}
            measure6={drink.strMeasure6}
            measure7={drink.strMeasure7}
            measure8={drink.strMeasure8}
            measure9={drink.strMeasure9}
            measure10={drink.strMeasure10}
            measure11={drink.strMeasure11}
            measure12={drink.strMeasure12}
            measure13={drink.strMeasure13}
            measure14={drink.strMeasure14}
            measure15={drink.strMeasure15}
            instructions={drink.strInstructions}
            picture={drink.strDrinkThumb}
            key={drink.idDrink} />;


          console.log(drink);
        })}
      </div>

      <div>
        {Object.keys(props.ingredientArray).map(function(drinkId){
          var drink = props.ingredientArray[drinkId];
          return <DrinkByIngredient
            name={drink.strDrink}
            ingredient1={drink.strIngredient1}
            ingredient2={drink.strIngredient2}
            ingredient3={drink.strIngredient3}
            ingredient4={drink.strIngredient4}
            ingredient5={drink.strIngredient5}
            ingredient6={drink.strIngredient6}
            ingredient7={drink.strIngredient7}
            ingredient8={drink.strIngredient8}
            ingredient9={drink.strIngredient9}
            ingredient10={drink.strIngredient10}
            ingredient11={drink.strIngredient11}
            ingredient12={drink.strIngredient12}
            ingredient13={drink.strIngredient13}
            ingredient14={drink.strIngredient14}
            ingredient15={drink.strIngredient15}
            measure1={drink.strMeasure1}
            measure2={drink.strMeasure2}
            measure3={drink.strMeasure3}
            measure4={drink.strMeasure4}
            measure5={drink.strMeasure5}
            measure6={drink.strMeasure6}
            measure7={drink.strMeasure7}
            measure8={drink.strMeasure8}
            measure9={drink.strMeasure9}
            measure10={drink.strMeasure10}
            measure11={drink.strMeasure11}
            measure12={drink.strMeasure12}
            measure13={drink.strMeasure13}
            measure14={drink.strMeasure14}
            measure15={drink.strMeasure15}
            instructions={drink.strInstructions}
            key={drink.idDrink} />;
        })}
      </div>
    </div>
  );
}

SearchResults.PropTypes = {
  nameArray: PropTypes.array,
  ingredientArray: PropTypes.array,
};

export default SearchResults;


//let displayedResultsByName
// if (props.nameArray.length > 0){
//   displayedResultsByName = {Object.keys(props.nameArray).map(function(drinkId){
//     var drink = props.nameArray[drinkId];
//     console.log(drink);
//   })}
// }
// {displayedResultsByName}
// {displayedResultsByIngredient}
