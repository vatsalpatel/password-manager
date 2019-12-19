import { combineReducers } from 'redux'
import tokenReducer from './tokenReducer';
import userReducer from './userReducer';
import folderReducer from './folderReducer';
import vaultReducer from './vaultReducer';

const rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer,
    folder: folderReducer,
    vault: vaultReducer
});

export default rootReducer;