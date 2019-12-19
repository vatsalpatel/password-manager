export default function userReducer(state = {}, action) {
    switch (action.type) {
        case "LOGIN_USER":
            return Object.assign({}, state, {
                token: action.payload
            })
        default:
            return state
    }
}