import {combineReducers} from 'redux';
import {loggedReducer} from './loggedReducer';


const rootReducer = combineReducers({
    loggedReducer
});

export default rootReducer;