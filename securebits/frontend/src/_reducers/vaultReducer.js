import { FETCH_VAULTS, CLEAR_VAULTS, ADD_VAULT, DELETE_VAULT, EDIT_VAULT } from '../_actions/types';

const vaultReducer = (state=[], action) => {
    switch(action.type) {
        case FETCH_VAULTS.SUCCESS:
            return action.payload
        case ADD_VAULT.SUCCESS:
            return [
                ...state,
                action.payload,
            ]
        case EDIT_VAULT.SUCCESS:
            return [
                ...state.filter(vault => vault.id !== action.payload.id),
                action.payload,
            ].sort((a, b) => a.id - b.id)
        case DELETE_VAULT.SUCCESS:
            return state.filter(vault => vault.id !== action.payload)
        case CLEAR_VAULTS.SUCCESS:
            return []
        default:
            return state
    }
}

export default vaultReducer;