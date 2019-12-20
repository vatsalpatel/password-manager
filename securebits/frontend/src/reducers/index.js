import { combineReducers } from 'react-redux';
import tokenReducer from './tokenReducer';
import userReducer from './userReducer';
import folderReducer from './folderReducer';
import VaultItemReducer from './VaultItemReducer';

export default combineReducers({
    token: tokenReducer,
    user: userReducer,
    folders: folderReducer,
    vault: VaultItemReducer,
})