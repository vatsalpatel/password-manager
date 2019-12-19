export default function vaultReducer(state = {}, action) {
    switch(action.type) {
        case 'FETCH_VAULTITEMS':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}