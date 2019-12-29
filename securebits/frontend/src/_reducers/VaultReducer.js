import { FETCH_VAULTS, CLEAR_VAULTS } from '../_actions/types';

const vaultReducer = (state=[], action) => {
    switch(action.type) {
        case FETCH_VAULTS.SUCCESS:
            return action.payload
        case CLEAR_VAULTS.SUCCESS:
            return []
        default:
            return state
    }
}

export default vaultReducer;