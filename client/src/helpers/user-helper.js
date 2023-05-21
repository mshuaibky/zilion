import axios from 'axios'
axios.defaults.withCredentials = true


export async function getUserData(id){
return new Promise((resolve,reject)=>{
    axios.get(`http://localhost:7000/get-user${id}`).then((data)=>{
        if(data){
            resolve(data)
        }
    }).catch((error)=>{
        reject(error)
    })
})
}

//logout user


export async function logout(id){
    return new Promise((resolve,reject)=>{
        axios.get(`http://localhost:7000/user-logout${id}`).then((data)=>{
            if(data){
                resolve(data)
            }
        }).catch((error)=>{
            reject(error)
        })
    })
    }

    //adding product to database
    export async function productDetails(details){
        return new Promise((resolve,reject)=>{
          axios.post('http://localhost:7000/product-details',details).then((data)=>{
              if(data){
                  resolve(data)
              }
          }).catch((error)=>{
              reject(error)
          })
        })
      }

    //getting all products

    export async function getAllProducts(){
        return new Promise((resolve,reject)=>{
          axios.get('http://localhost:7000/all-products').then((data)=>{
              if(data){
                  resolve(data)
              }
          }).catch((error)=>{
              reject(error)
          })
        })
      }
      //add to cart

      export async function saveCart(id){
        return new Promise((resolve,reject)=>{
          axios.get(`http://localhost:7000/save-cart${id}`).then((data)=>{
              if(data){
                  resolve(data)
              }
          }).catch((error)=>{
              reject(error)
          })
        })
      }  

      //get cart items
      export async function getCartItem(id){
        return new Promise((resolve,reject)=>{
          axios.get(`http://localhost:7000/get-cart-item${id}`).then((data)=>{
              if(data){
                  resolve(data)
              }
          }).catch((error)=>{
              reject(error)
          })
        })
      }  

    
      