const initState = {
  recipes: [
    {id: '1', title: 'Negroni', content: 'pour over ice, garnish with orange'},
    {id: '2', title: 'French 75', content: 'pour over ice, garnish'},
    {id: '3', title: 'Mai Tai', content: 'pour over ice, garnish with pineapple'}
  ]
};

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      console.log('create recipe', action.recipe)
      return state;
    case 'CREATE_RECIPE_ERROR':
      console.log('create recipe error', action.err);
      return state;
    default:
    return state;
  }
}

export default recipeReducer;
