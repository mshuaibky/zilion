const SuperAdmin=require('../model/superAdmin')
const Product=require('../model/product')
exports.getSuperAdmin=async(req,res)=>{
    try {
       const{id}=req.params
        const superAdmin=await SuperAdmin.findById(id)
        if(superAdmin){
            res.status(200).send({data:superAdmin})
        }else{
            res.status(500).send({msg:'something went wrong'})
        }
    } catch (error) {
        res.send(error)
    }
}

//approving Products
exports.approvingProduct=async(req,res)=>{
    try {
        const {id}=req.params
        console.log(id,'lll');
        const products=await Product.findByIdAndUpdate(id,{
            $set:{
                approve:true  
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
exports.superLogout=async(req,res)=>{
    try {
        const {id}=req.params
        console.log(id,'id');
       let supAdmin=await SuperAdmin.findByIdAndUpdate(id,{
       $set:{
        isLoggedIn:false
       }
       })
       console.log(supAdmin);
       if(supAdmin){
        req.status(200).send({data:supAdmin})
       }else{
        res.send(500).send({msg:'server error'})
       }
    } catch (error) {
        res.send(error)
    }
}