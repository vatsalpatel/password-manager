// User Actions
export const createUser = data => ({
    type: "CREATE_USER",
    payload: { data }
})

export const getUser = data => ({
    type: "GET_USER",
    payload: { data }
})

export const updateUser = data => ({
    type: "UPDATE_USER",
    payload: { data }
})

export const deleteUser = data => ({
    type: "DELETE_USER",
    payload: { data }
})

export const loginUser = data => ({
    type: "LOGIN",
    payload: { data }
})

export const logoutUser = data => ({
    type: "LOGOUT",
    payload: { data }
})

// Folder Actions
export const createFolder = data => ({
    type: "CREATE_FOLDER",
    payload: { data }
})

export const getFolder = data => ({
    type: "GET_FOLDER",
    payload: { data }
})

export const updateFolder = data => ({
    type: "UPDATE_FOLDER",
    payload: { data }
})

export const deleteFolder = data => ({
    type: "DELETE_FOLDER",
    payload: { data }
})

// Vault Item Actions
export const createItem = data => ({
    type: "CREATE_ITEM",
    payload: { data }
})

export const getItem = data => ({
    type: "GET_ITEM",
    payload: { data }
})

export const updateItem = data => ({
    type: "UPDATE_ITEM",
    payload: { data }
})

export const deleteItem = data => ({
    type: "DELETE_ITEM",
    payload: { data }
})

export const encryptData = data => ({
    type: "ENCRYPT_DATA",
    payload: { data }
})

export const decryptData = data => ({
    type: "DECRYPT_DATA",
    payload: { data }
})
