import { combineReducers } from 'redux'
import userReducer from './userReducer';

const rootReducer = combineReducers({
    token: userReducer
});

export default rootReducer;