import { GET_TOKEN, DELETE_TOKEN, GET_KEY, DELETE_KEY, LOGIN_USER, LOGOUT_USER, FETCH_USER } from './types';
import { produceKey, login } from '../_services/services';

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
    login(username, password)
        .then(res => {
            dispatch({ type: GET_TOKEN.SUCCESS, payload: res.data.auth_token })
            dispatch({ type: GET_KEY.SUCCESS, payload: produceKey(username, password) })
        })
}

export const logoutUser = (data) => dispatch => {

}