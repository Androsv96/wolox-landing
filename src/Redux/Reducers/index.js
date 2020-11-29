import { combineReducers } from 'redux';
import userReducer from './userReducer';
import signupReducer from './signupReducer';
import techsReducer from './techsReducer';

export default combineReducers({
    userReducer, signupReducer, techsReducer,
});