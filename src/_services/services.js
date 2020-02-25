import CryptoJS from 'crypto-js';
import axios from 'axios';
import store from '../store';

export const encrypt = text => {
    let key = store.getState().key
    let res = CryptoJS.AES.encrypt(text, key)
    return res.toString()
}

export const decrypt = text => {
    let key = store.getState().key
    let res = CryptoJS.AES.decrypt(text, key)
    return res.toString(CryptoJS.enc.Utf8)
}

export const produceKey = (username, password) => {
    let hash = CryptoJS.SHA256(username)
    return CryptoJS.PBKDF2(password, hash, { keySize: 256 / 32, iteration: 100 }).toString()
}

export const login = (username, password) => {
    return axios.post('/api/auth/token/login/', {
        username: username,
        password: password,
    })
}

export const logout = () => {
    const token = store.getState().token
    return axios.post('/api/auth/token/logout', {}, {
        headers: {
            Authorization: `Token ${token}`,
        }
    })
}

export const fetchData = (url, token) => {
    return axios.get(`/api/${url}`, {
        headers: {
            Authorization: `Token ${token}`
        }
    })
}

export const addData = (url, data) => {
    const token = store.getState().token
    const user = store.getState().user
    return axios.post(`/api/${url}`, { ...data, user: user.id }, {
        headers: {
            Authorization: `Token ${token}`
        }
    })
}

export const editData = (url, data) => {
    const token = store.getState().token
    const user = store.getState().user
    return axios.put(`/api/${url}`, { ...data, user: user.id}, {
        headers: {
            Authorization: `Token ${token}`
        }
    })
}

export const deleteData = (url, data) => {
    const token = store.getState().token
    return axios.delete(`/api/${url}`, {
        headers: {
            Authorization: `Token ${token}`,
        },
        data: {
            current_password: data,
        }
    })
}

export const encryptAllVaults = () => {
    const vaults = store.getState().vaults
    let newVaults = vaults.map(vault => ({
        ...vault,
        username: encrypt(vault.username),
        password: encrypt(vault.password),
    }))
    newVaults.map( async vault => {
        await editData(`vaults/${vault.id}/`, vault)
    })
    return newVaults
}