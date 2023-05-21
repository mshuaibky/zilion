const Admin=require('../model/admin')
const Product=require('../model/product')

exports.getAdminDetails=async(req,res)=>{
    try {
        console.log(req.params,'namma body');
        const {id}=req.params
        const loggedAdmin=await Admin.findById(id)
        console.log(loggedAdmin,'admin');
        if(loggedAdmin){
            res.status(200).send({data:loggedAdmin})
        }else{
            res.status(500).send({msg:'something went wrong'})
        }
    } catch (error) {
        res.send(error)
    }
}
exports.getAllProduct=async(req,res)=>{
    try {
        let products=await Product.find({})
        console.log(products,'namma products');
        if(products){
            res.status(200).send({data:products})
        }else{
            res.status(500).send({msg:'something went wrong'})
        }
    } catch (error) {
        res.send(error) 
    }
}

//verifying product
exports.VarifyProduct=async(req,res)=>{
    try {
        const {id}=req.params
        console.log(id,'lll');
        const products=await Product.findByIdAndUpdate(id,{
            $set:{
              varify:true  
            }
        })
      if(products){
        const pro=await Product.find({})
        res.status(200).send({data:pro})
      }
    } catch (error) {
        
    }
}
//logout
exports.adminLogout=async(req,res)=>{
    try {
        const {id}=req.params
        console.log(id,'id');
       let admin=await Admin.findByIdAndUpdate(id,{
       $set:{
        isLoggedIn:false
       }
       })
       console.log(admin);
       if(admin){
        req.status(200).send({data:admin})
       }else{
        res.send(500).send({msg:'server error'})
       }
    } catch (error) {
        
    }
}