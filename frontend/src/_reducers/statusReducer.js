import { REQUEST_FAILURE } from '../_actions/types';

const initialState = {
    code: 0,
    msg: "",
}

const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_FAILURE.DISPLAY:
            return {
                code: action.payload.code,
                msg: action.payload.msg,
            }
        case REQUEST_FAILURE.CLEAR:
            return initialState
        default:
            return state
    }
}

export default statusReducer;