export default function tokenReducer(state = {}, action) {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                token: action.payload
            }
        case "LOGOUT_USER":
            return {
                ...state,
                token: "",
            }
        default:
            return state
    }
}