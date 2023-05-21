import axios from 'axios'
axios.defaults.withCredentials = true


//sign up Data
export async function signUpDetails(credentials){
    console.log(credentials,'credn');
  return new Promise((resolve,reject)=>{
    axios.post('http://localhost:7000/sign-up',credentials).then((data)=>{
        console.log(data,'namma data');
        resolve(data)
    }).catch((error)=>{
        reject(error)
    })
  })
}
//login Data
export async function loginData(credentials){
    console.log(credentials,'credn');
  return new Promise((resolve,reject)=>{
    axios.post('http://localhost:7000/login',credentials).then((data)=>{      
        resolve(data)
    }).catch((error)=>{
        reject(error)
    })
  })
}