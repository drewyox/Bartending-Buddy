import recipeReducer from './recipeReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer
});


export default rootReducer;
