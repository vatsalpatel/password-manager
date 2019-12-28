import { GET_TOKEN, DELETE_TOKEN } from '../_actions/types';

const tokenReducer = (state = "", action) => {
    switch(action.type){
        case GET_TOKEN.SUCCESS:
            return action.data
        case DELETE_TOKEN.SUCCESS:
            return ""
        default:
            return state
    }
}

export default tokenReducer;