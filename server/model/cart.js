const mongoose=require('mongoose')

const cartSchema=new mongoose.Schema({
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
  productId:{
    type:mongoose.Schema.Types.ObjectId
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId
  },

  image:{
    type:Array
  },
 
})
module.exports=mongoose.model('Cart',cartSchema)
