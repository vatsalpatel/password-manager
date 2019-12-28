import { FETCH_FOLDERS } from '../_actions/types';

const folderReducer = (state=[], action) => {
    switch(action.type) {
        case FETCH_FOLDERS.SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default folderReducer;