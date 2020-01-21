import { FETCH_FOLDERS, CLEAR_FOLDERS, EDIT_FOLDER, DELETE_FOLDER, ADD_FOLDER } from '../_actions/types';

const folderReducer = (state=[], action) => {
    switch(action.type) {
        case FETCH_FOLDERS.SUCCESS:
            return action.payload
        case ADD_FOLDER.SUCCESS:
            return [
                ...state,
                action.payload
            ]
        case EDIT_FOLDER.SUCCESS:
            return [
                ...state.filter(folder => folder.id !== action.payload.id),
                action.payload,
            ].sort((a, b) => a.id - b.id)
        case DELETE_FOLDER.SUCCESS:
            return state.filter(folder => folder.id !== action.payload)
        case CLEAR_FOLDERS.SUCCESS:
            return []
        default:
            return state
    }
}

export default folderReducer;