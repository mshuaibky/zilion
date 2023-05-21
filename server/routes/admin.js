const express=require('express')
const router=express.Router()
const {getAdminDetails,
    getAllProduct,
    VarifyProduct,adminLogout
} =require('../controller/admin')

router.get('/get-admin:id',getAdminDetails)
router.get('/get-product',getAllProduct)
router.get('/varify-product:id',VarifyProduct)
router.get('/admin-logout:id',adminLogout)
module.exports=router