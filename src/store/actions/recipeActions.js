export const createRecipe = (recipe) => {
  return(dispatch, getState) => {
      dispatch({type: 'CREATE_RECIPE', recipe })
    }
}
