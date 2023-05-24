import baseUrl from './baseUrl';


//sign up Data
export async function signUpDetails(credentials) {
  console.log(credentials, 'credn');
  return new Promise((resolve, reject) => {
    baseUrl.post('/sign-up', credentials).then((data) => {
      console.log(data, 'namma data');
      resolve(data)
    }).catch((error) => {
      reject(error)
    })
  })
}
//login Data
export async function loginData(credentials) {
  console.log(credentials, 'credn');
  return new Promise((resolve, reject) => {
    baseUrl.post('/login', credentials).then((data) => {
      resolve(data)
    }).catch((error) => {
      reject(error)
    })
  })
}