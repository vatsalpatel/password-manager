import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import userReducer from './userReducer';
import folderReducer from './folderReducer';
import VaultReducer from './VaultReducer';
import keyReducer from './keyReducer';

export default combineReducers({
    token: tokenReducer,
    key: keyReducer,
    user: userReducer,
    folders: folderReducer,
    vaults: VaultReducer,
})