const mongoose=require('mongoose')

const adminSchema=new mongoose.Schema({
   name:{
    type:String,
    required:true,
    trim:true
   },
   email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
   
  },
  isLoggedIn:{
    type:Boolean,
    default:false
  },
 
  
  isAdmin:{
    type:Boolean,
    default:false
  }
})
module.exports=mongoose.model('Admin',adminSchema)
