const express=require('express')
const router=express.Router()
const {getSuperAdmin,
    approvingProduct,superLogout
}=require('../controller/super-admin')

router.get('/get-super-admin:id',getSuperAdmin)
router.get('/approve-product:id',approvingProduct)
router.get('/super-admin-logout:id',superLogout)
module.exports=router