import { GET_TOKEN, CLEAR_TOKEN, GET_KEY, CLEAR_KEY, FETCH_USER, FETCH_FOLDERS, FETCH_VAULTS, CLEAR_USER, CLEAR_FOLDERS, CLEAR_VAULTS } from './types';
import { produceKey, login, logout, fetchData } from '../_services/services';

export const getToken = data => dispatch => {
    dispatch({ type: GET_TOKEN.SUCCESS, payload: data })
}

export const getKey = data => dispatch => {
    dispatch({ type: GET_KEY.SUCCESS, payload: data })
}

export const loginUser = (username, password) => dispatch => {
    console.log(username, password)
    login(username, password)
        .then(res => {
            dispatch({ type: GET_TOKEN.SUCCESS, payload: res.data.auth_token })
            dispatch({ type: GET_KEY.SUCCESS, payload: produceKey(username, password) })
            // TODO: fetch user, folders and vaults
        })
        .catch()
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
            dispatch({ type: FETCH_VAULTS.SUCCESS, payload: res.data })
        })
        .catch()
}