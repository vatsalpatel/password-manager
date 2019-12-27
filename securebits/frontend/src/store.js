import { createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk'
import rootReducer from './_reducers';

const stub = {
    token: "dummy_token",
    key: "dummy_key",
    user: {
        id: 199,
        username: "dummy_user",
        email: "user@.com",
        first_name: "John",
        last_name: "Doe",
        reminder: "I forget",
    },
    vaults: [
        {
            id: 399,
			name: "vault-1",
			username: "adminadmin",
			password: "adminadmin123",
			folder: 299,
			user: 199,
        },
        {
            id: 399,
			name: "vault-1",
			username: "adminadmin",
			password: "adminadmin123",
			folder: 299,
			user: 199,
        },
        {
            id: 399,
			name: "vault-1",
			username: "adminadmin",
			password: "adminadmin123",
			folder: 299,
			user: 199,
        },
        {
            id: 399,
			name: "vault-1",
			username: "adminadmin",
			password: "adminadmin123",
			folder: 299,
			user: 199,
        },
        {
            id: 399,
			name: "vault-1",
			username: "adminadmin",
			password: "adminadmin123",
			folder: 299,
			user: 199,
        },
        {
            id: 398,
			name: "dummy_vault-2",
			username: "adminadmin",
			password: "adminadmin123",
			folder: 299,
			user: 199,
        },
        {
            id: 397,
			name: "dummy_vault-3",
			username: "adminadmin",
			password: "adminadmin123",
			folder: 298,
			user: 199,
        },
    ],
    folders: [
        {
            id: 299,
			name: "dummy_folder",
			user: 199,
        },
        {
            id: 298,
			name: "dummy_folder-2",
			user: 199,
        },
    ],
}

const store = createStore(rootReducer, stub, applyMiddleware(Thunk));

export default store;