const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
   name:{
    type:String,
    required:true,
    trim:true
   },
   discription: {
    type: String,
   
    trim: true,
  },
  catagory: {
    type: String,
    trim: true,
  },
  subCatagory:{
    type:String,
    trim:true
  },
  price:{
   type:Number
  },
  offerPrice: {
    type: Number,
   
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId
  },

  image:{
    type:Array
  },
  approve:{
    type:Boolean,
    default:false
  },
  varify:{
    type:Boolean,
    default:false
  }
 
})
module.exports=mongoose.model('Product',productSchema)
