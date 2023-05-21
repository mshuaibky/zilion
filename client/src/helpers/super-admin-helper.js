import axios from 'axios'
axios.defaults.withCredentials = true


export async function getSuperAdmin(id){
return new Promise((resolve,reject)=>{
    axios.get(`http://localhost:7000/super/get-super-admin${id}`).then((data)=>{
        if(data){
            resolve(data)
        }
    }).catch((error)=>{
        reject(error)
    })
})
}


//approvig products
export async function approveProduct(id){
    return new Promise((resolve,reject)=>{
        axios.get(`http://localhost:7000/super/approve-product${id}`).then((data)=>{
            if(data){
                resolve(data)
            }
        }).catch((error)=>{
            reject(error)
        })
    })
    }
//logut
export async function logout(id){
    return new Promise((resolve,reject)=>{
        axios.get(`http://localhost:7000/super/super-admin-logout${id}`).then((data)=>{
            if(data){
                resolve(data)
            }
        }).catch((error)=>{
            reject(error)
        })
    })
    }