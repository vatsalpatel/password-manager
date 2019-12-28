import { GET_KEY, DELETE_KEY } from '../_actions/types';

const keyReducer = (state = "", action) => {
    switch(action.type){
        case GET_KEY.SUCCESS:
            return action.data
        case DELETE_KEY.SUCCESS:
            return ""
        default:
            return state
    }
}

export default keyReducer;