import { GET_TOKEN, CLEAR_TOKEN, GET_KEY, CLEAR_KEY, REQUEST_FAILURE } from './types';
import { FETCH_VAULTS, CLEAR_VAULTS, ADD_VAULT, EDIT_VAULT, DELETE_VAULT } from './types'
import { FETCH_FOLDERS, CLEAR_FOLDERS, ADD_FOLDER, EDIT_FOLDER, DELETE_FOLDER } from './types'
import { FETCH_USER, CLEAR_USER, EDIT_USER } from './types'
import { produceKey, login, logout, fetchData, deleteData, decrypt, encryptAllVaults } from '../_services/services';

export const getToken = data => dispatch => {
    dispatch({ type: GET_TOKEN.SUCCESS, payload: data })
}

export const getKey = data => dispatch => {
    dispatch({ type: GET_KEY.SUCCESS, payload: data })
}

export const loginUser = (username, password, token) => dispatch => {
    dispatch(getToken(token))
    dispatch(getKey(produceKey(username, password)))
    dispatch(fetchUser(token))
    dispatch(fetchFolders(token))
    dispatch(fetchVaults(token))

}

export const continueSession = token => dispatch => {
    dispatch(fetchUser(token))
    dispatch(fetchFolders(token))
    dispatch(fetchVaults(token))
}

export const logoutUser = token => dispatch => {
    logout(token)
    dispatch({ type: CLEAR_TOKEN.SUCCESS })
    dispatch({ type: CLEAR_KEY.SUCCESS })
    dispatch({ type: CLEAR_USER.SUCCESS })
    dispatch({ type: CLEAR_FOLDERS.SUCCESS })
    dispatch({ type: CLEAR_VAULTS.SUCCESS })
}

export const fetchUser = token => dispatch => {
    fetchData('auth/users/me/', token)
        .then(res => {
            dispatch({ type: FETCH_USER.SUCCESS, payload: res.data })
        })
        .catch()
}

export const fetchFolders = token => dispatch => {
    fetchData('folders/', token)
        .then(res => {
            dispatch({ type: FETCH_FOLDERS.SUCCESS, payload: res.data })
        })
        .catch()
}

export const fetchVaults = token => dispatch => {
    fetchData('vaults/', token)
        .then(res => {
            let data = res.data.map(vault => ({
                ...vault,
                username: decrypt(vault.username),
                password: decrypt(vault.password),
            }))
            dispatch({ type: FETCH_VAULTS.SUCCESS, payload: data })
        })
        .catch()
}

export const addVault = data => dispatch => {
    dispatch({
        type: ADD_VAULT.SUCCESS, payload: {
            ...data,
            username: decrypt(data.username),
            password: decrypt(data.password),
        }
    })
}

export const editVault = data => dispatch => {
    dispatch({
        type: EDIT_VAULT.SUCCESS, payload: {
            ...data,
            username: decrypt(data.username),
            password: decrypt(data.password),
        }
    })
}

export const deleteVault = data => dispatch => {
    deleteData(`vaults/${data}/`)
        .then(res => {
            dispatch({ type: DELETE_VAULT.SUCCESS, payload: data })
        })
        .catch(res => console.log(res.response))
}

export const addFolder = data => dispatch => {
    dispatch({ type: ADD_FOLDER.SUCCESS, payload: data })
}

export const editFolder = data => dispatch => {
    dispatch({ type: EDIT_FOLDER.SUCCESS, payload: data })
}

export const deleteFolder = data => dispatch => {
    deleteData(`folders/${data}/`)
        .then(res => {
            dispatch({ type: DELETE_FOLDER.SUCCESS, payload: data })
        })
        .catch(res => console.log(res.response))
}

export const addUser = (username, password) => dispatch => {
    login(username, password)
        .then(res => {
            dispatch(loginUser(username, password, res.data.auth_token))
        })
}

export const editUser = data => dispatch => {
    dispatch({ type: EDIT_USER.SUCCESS, payload: data })
}

export const updateVaultsAfterUserChange = (username, password) => dispatch => {
    let newKey = produceKey(username, password)
    dispatch(getKey(newKey))
    let newVaults = encryptAllVaults()
    newVaults.map(vault => dispatch(editVault(vault)))
}

export const displayError = data => dispatch => {
    dispatch({ type: REQUEST_FAILURE.DISPLAY, payload: data })
}

export const clearError = data => dispatch => {
    dispatch({ type: REQUEST_FAILURE.CLEAR, paylad: data })
}