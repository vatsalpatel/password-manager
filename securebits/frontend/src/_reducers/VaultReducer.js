import { FETCH_VAULTS } from '../_actions/types';

const vaultReducer = (state=[], action) => {
    switch(action.type) {
        case FETCH_VAULTS.SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default vaultReducer;