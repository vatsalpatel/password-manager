import CryptoJS from 'crypto-js';
import axios from 'axios';

export const encrypt = (text, key) => {
    let res = CryptoJS.AES.encrypt(text, key)
    return res.toString()
}

export const decrypt = (text, key) => {
    let res = CryptoJS.AES.decrypt(text, key)
    return res.toString(CryptoJS.enc.Utf8)
}

export const produceKey = (username, password) => {
    let hash = CryptoJS.SHA256(username)
    return CryptoJS.PBKDF2(password, hash, { keySize: 256 / 32 }).toString()
}

export const login = (username, password) => {
    return axios.post('auth/token/login/', {
        username: username,
        password: password,
    })
}

export const logout = (token) => {
    return axios.post('auth/token/logout', {}, {
        headers: {
            Authorization: `Token ${token}`,
        }
    })
}