import { GET_TOKEN, DELETE_TOKEN, GET_KEY, DELETE_KEY } from './types';

export const getToken = data => dispatch => {
    dispatch({type:GET_TOKEN.SUCCESS, data:data})
}

export const deleteToken = () => dispatch => {
    dispatch({type:DELETE_TOKEN.SUCCESS})
}

export const getKey = data => dispatch => {
    dispatch({type:GET_KEY.SUCCESS, data:data})
}

export const deleteKey = () => dispatch => {
    dispatch({type:DELETE_KEY.SUCCESS})
}