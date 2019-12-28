import { FETCH_USER } from '../_actions/types';

const userReducer = (state={}, action) => {
    switch(action.type) {
        case FETCH_USER.SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default userReducer;