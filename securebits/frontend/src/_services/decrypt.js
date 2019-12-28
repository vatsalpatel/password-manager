import CryptoJS from 'crypto-js';

const encrypt = (text, key) => {
    let res = CryptoJS.AES.decrypt(text, key)
    return res.toString(CryptoJS.enc.Utf8)
}

export default encrypt;