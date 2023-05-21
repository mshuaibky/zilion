import {BrowserRouter,Routes,Route,}from 'react-router-dom'
import './App.css'
import SignUpPage from './pages/sign-up-page'
import Login from './components/login'
import LandingPage from './pages/user/landing-page'
import AdminLandingPage from './pages/admin/admin-landing-page'
import MainPage from './pages/superAdmin/main-page'
import AddProductPage from './pages/user/add-product-page'
import CartPage from './pages/user/cart-page'

function App() {
 

  return (
    <div>
    <BrowserRouter>
       <Routes>
         {/* signUp and login routes */}
       <Route path='/sign-up' element={<SignUpPage/>} />
       <Route path='/login' element={<Login/>} />

       {/* userRoute */}
       <Route path='/' element={<LandingPage/>} />
       <Route path='/add-product' element={<AddProductPage/>} />
       <Route path='/cart' element={<CartPage/>} />

      {/* admin routes  */}
      <Route path='/admin/landing-page' element={<AdminLandingPage/>} />
      
    
       
      {/* superAdmin Routes */}
      <Route path='/super/main-page' element={<MainPage/>} />



       </Routes>
       
       </BrowserRouter>
      </div>
  )
}

export default App
