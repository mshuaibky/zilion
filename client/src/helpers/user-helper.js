import baseUrl from './baseUrl'

export async function getUserData(id) {
    return new Promise((resolve, reject) => {
        baseUrl.get(`/get-user${id}`).then((data) => {
            if (data) {
                resolve(data)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}

//logout user


export async function logout(id) {
    return new Promise((resolve, reject) => {
        baseUrl.get(`/user-logout${id}`).then((data) => {
            if (data) {
                resolve(data)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}

//adding product to database
export async function productDetails(details) {
    return new Promise((resolve, reject) => {
        baseUrl.post('/product-details', details).then((data) => {
            if (data) {
                resolve(data)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}

//getting all products

export async function getAllProducts() {
    return new Promise((resolve, reject) => {
        baseUrl.get('/all-products').then((data) => {
            if (data) {
                resolve(data)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}
//add to cart

export async function saveCart(id) {
    return new Promise((resolve, reject) => {
        baseUrl.get(`/save-cart${id}`).then((data) => {
            if (data) {
                resolve(data)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}

//get cart items
export async function getCartItem(id) {
    return new Promise((resolve, reject) => {
        baseUrl.get(`/get-cart-item${id}`).then((data) => {
            if (data) {
                resolve(data)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}


