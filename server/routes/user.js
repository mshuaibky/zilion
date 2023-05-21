const express=require('express')
const router=express.Router()
const {signUpDetails,loginDetails,getUser,
    productDetails,AllProducts,
    userLogout,saveToCart,getCartItems
}=require('../controller/user')

router.post('/sign-up',signUpDetails)
router.post('/login',loginDetails)
router.post('/product-details',productDetails)

router.get('/get-user:id',getUser)
router.get('/user-logout:id',userLogout)
router.get('/all-products',AllProducts)
router.get('/save-cart:id',saveToCart)
router.get('/get-cart-item:id',getCartItems)

module.exports=router