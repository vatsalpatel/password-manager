import CryptoJS from 'crypto-js';

const encrypt = (text, key) => {
    let res = CryptoJS.AES.encrypt(text, key)
    return res.toString()
}

export default encrypt;