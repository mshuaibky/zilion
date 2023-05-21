import axios from 'axios'
axios.defaults.withCredentials = true


export async function getAdminData(id){
return new Promise((resolve,reject)=>{
    axios.get(`http://localhost:7000/admin/get-admin${id}`).then((data)=>{
        if(data){
            resolve(data)
        }
    }).catch((error)=>{
        reject(error)
    })
})
}

//getting all products

export async function getProduct(){
    return new Promise((resolve,reject)=>{
        axios.get('http://localhost:7000/admin/get-product').then((data)=>{
            if(data){
                resolve(data)
            }
        }).catch((error)=>{
            reject(error)
        })
    })
    }

    //varify product

    export async function varifyProduct(id){
        
        return new Promise((resolve,reject)=>{
            axios.get(`http://localhost:7000/admin/varify-product${id}`).then((data)=>{
                if(data){
                    resolve(data)
                }
            }).catch((error)=>{
                reject(error)
            })
        })
        }
        //logout

        export async function logout(id){
            return new Promise((resolve,reject)=>{
                axios.get(`http://localhost:7000/admin/admin-logout${id}`).then((data)=>{
                    if(data){
                        resolve(data)
                    }
                }).catch((error)=>{
                    reject(error)
                })
            })
            }