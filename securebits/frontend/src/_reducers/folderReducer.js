import { FETCH_FOLDERS, CLEAR_FOLDERS } from '../_actions/types';

const folderReducer = (state=[], action) => {
    switch(action.type) {
        case FETCH_FOLDERS.SUCCESS:
            return action.payload
        case CLEAR_FOLDERS.SUCCESS:
            return []
        default:
            return state
    }
}

export default folderReducer;