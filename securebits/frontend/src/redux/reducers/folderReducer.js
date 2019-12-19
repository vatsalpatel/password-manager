export default function folderReducer(state = {}, action) {
    switch(action.type) {
        case "FETCH_FOLDER":
            return {
                ...state,
                folders: action.payload
            }
        default:
            return state
    }
}