import { GET_KEY, DELETE_KEY } from '../_actions/types';

const keyReducer = (state = "", action) => {
    switch(action.type){
        case GET_KEY.SUCCESS:
            window.sessionStorage.setItem("enc-key", action.payload)
            return action.payload
        case DELETE_KEY.SUCCESS:
            window.sessionStorage.setItem("enc-key", "")
            return ""
        default:
            return state
    }
}

export default keyReducer;