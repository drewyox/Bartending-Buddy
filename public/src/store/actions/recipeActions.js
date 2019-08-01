export function createRecipe(recipe){
  return(dispatch, getState, { getFirebase, getFirestore }) => {
      const firestore = getFirestore();
      firestore.collection('recipes').add({
        ...recipe,
        authorFirstName: 'Dudley',
        authorLastName: 'BadManners',
        authorId: 12345,
        createdAt: new Date()
      }).then(() => {
          dispatch({type: 'CREATE_RECIPE', recipe });
        }).catch((err) =>{
          dispatch({type: 'CREATE_RECIPE_ERROR', err });
        })
      }
    };
