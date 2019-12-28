import CryptoJS from 'crypto-js';

const produceKey = (username, password) => {
    let hash = CryptoJS.SHA256(username)
    return CryptoJS.PBKDF2(password, hash, { keySize: 256/32 }).toString()
}

export default produceKey;