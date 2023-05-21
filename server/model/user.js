const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
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
 
  
  isUser:{
    type:Boolean,
    default:false
  }
})
module.exports=mongoose.model('User',userSchema)
