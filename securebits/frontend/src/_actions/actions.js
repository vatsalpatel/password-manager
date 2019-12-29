import { GET_TOKEN, DELETE_TOKEN, GET_KEY, DELETE_KEY, FETCH_USER, FETCH_FOLDERS, FETCH_VAULTS } from './types';
import { produceKey, login, logout, fetchData } from '../_services/services';

export const getToken = data => dispatch => {
    dispatch({ type: GET_TOKEN.SUCCESS, payload: data })
}

export const deleteToken = () => dispatch => {
    dispatch({ type: DELETE_TOKEN.SUCCESS })
}

export const getKey = data => dispatch => {
    dispatch({ type: GET_KEY.SUCCESS, payload: data })
}

export const deleteKey = () => dispatch => {
    dispatch({ type: DELETE_KEY.SUCCESS })
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
        .then(res => {
            dispatch({ type: DELETE_TOKEN.SUCCESS })
            dispatch({ type: DELETE_KEY.SUCCESS })
            // TODO: clear user, folders and vaults from store
        })
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