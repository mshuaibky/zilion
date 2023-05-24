import baseUrl from './baseUrl'

export async function getAdminData(id) {
    return new Promise((resolve, reject) => {
        baseUrl.get(`/admin/get-admin${id}`).then((data) => {
            if (data) {
                resolve(data)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}


//getting all products
export async function getProduct() {
    return new Promise((resolve, reject) => {
        baseUrl.get('/admin/get-product').then((data) => {
            if (data) {
                resolve(data)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}

//varify product
export async function varifyProduct(id) {

    return new Promise((resolve, reject) => {
        baseUrl.get(`/admin/varify-product${id}`).then((data) => {
            if (data) {
                resolve(data)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}
//logout

export async function logout(id) {
    return new Promise((resolve, reject) => {
        baseUrl.get(`/admin/admin-logout${id}`).then((data) => {
            if (data) {
                resolve(data)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}