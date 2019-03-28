import userReducer from './userReducer.js';
import mathReducer from './mathReducer.js';
import {combineReducers} from "redux";




const rootReducer = combineReducers({
    users: userReducer,
    math:mathReducer
});

export default rootReducer;