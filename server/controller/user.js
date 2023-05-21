const bcrypt = require('bcrypt');
const User = require('../model/user')
const Admin = require('../model/admin')
const Cart=require('../model/cart')
const SuperAdmin = require('../model/superAdmin')
const Product=require('../model/product')
const cloudinary=require('../util/cloudinary')
let ObjectId=require('mongoose').Types.ObjectId


exports.signUpDetails = (req, res) => {
    try {
        const { name, email, password } = req.body.values
        const checkName = new Promise((resolve, reject) => {
            if (!name || name?.length < 4) {
                reject(new Error('please enter a valid name'))
            } else {
                resolve()
            }
        })

        const checkEmail = new Promise((resolve, reject) => {
            User.findOne({ email }).then((email) => {
                if (email) {
                    res.status(401).json({ msg: 'user already exists' })
                    // reject(new Error('Email is already exists'))
                } else {
                    resolve()
                }
            })

        })
        Promise.all([checkName, checkEmail]).then(() => {
            if (password) {
                bcrypt.hash(password, 10, function (err, hash) {
                    if (err) {
                        res.status(500).send({ msg: 'user already exists', err: err })
                    }

                    else if (req.body.data == 'user') {
                        const newUser = new User({
                            name,
                            email,
                            isUser: true,
                            password: hash
                        })
                        newUser.save().then((user) => {
                            console.log('saved succeffully');
                            res.status(202).json({ success: 'registration success' })
                        })
                    }
                    else if (req.body.data == 'admin') {
                        const newAdmin = new Admin({
                            name,
                            email,
                            isAdmin: true,
                            password: hash
                        })
                        newAdmin.save().then(() => {
                            console.log('admin saved succeffully');
                            res.status(202).json({ success: 'registration success' })
                        })
                    }
                    else if (req.body.data == 'superAdmin') {
                        const superAdmin = new SuperAdmin({
                            name,
                            email,
                            SuperAdmin: true,
                            password: hash
                        })
                        superAdmin.save().then(() => {
                            console.log('superAdmin saved succeffully');
                            res.status(202).json({ success: 'registration success' })
                        })
                    }
                });
            }
        })
    } catch (error) {

    }
}

//login Details

exports.loginDetails = async (req, res) => {
    try {
        console.log(req.body, 'login body');
        const { email, password } = req.body.values
        if (req.body.data == 'user') {
            let user = await User.findOne({ email })
            console.log(user, 'namma user');
            if (user) {
                let validUser = await bcrypt.compare(password, user.password)
                console.log(validUser, 'validUser');
                if (validUser) {
                    let loggedIn = await User.findByIdAndUpdate({ _id: user._id }, {
                        $set: {
                            isLoggedIn: true
                        }
                    })
                    console.log(loggedIn, 'logged in detatils');
                    if (loggedIn) {
                        console.log(user._id, 'id');

                        res.status(200).send({ msg: loggedIn })
                    } else {
                        res.status(500).send({ msg: 'something went wrong' })
                    }
                } else {
                    res.status(401).send({ msg: 'password doesnot match' })
                }

            } else {
                res.status(500).send({ msg: 'no user found' })
            }
        }

        //checking for admin
        else if (req.body.data == 'admin') {
            let admin = await Admin.findOne({ email })
            console.log(admin, 'namma user');
            if (admin) {
                let validAdmin = await bcrypt.compare(password, admin.password)
                console.log(validAdmin, 'validUser');
                if (validAdmin) {
                    let loggedIn = await Admin.findByIdAndUpdate({ _id: admin._id }, {
                        $set: {
                            isLoggedIn: true
                        }
                    })
                    console.log(loggedIn, 'logged in detatils');
                    if (loggedIn) {
                        console.log(admin._id, 'id');

                        res.status(200).send({ msg: loggedIn })
                    } else {
                        res.status(500).send({ msg: 'something went wrong' })
                    }
                } else {
                    res.status(401).send({ msg: 'password doesnot match' })
                }

            } else {
                res.status(500).send({ msg: 'no user found' })
            }
        }
        //checkig for superAdmin
        else if (req.body.data == 'superAdmin') {
            let superAdmin = await SuperAdmin.findOne({ email })
            console.log(superAdmin, 'namma user');
            if (superAdmin) {
                let validAdmin = await bcrypt.compare(password, superAdmin.password)
                console.log(validAdmin, 'validUser');
                if (validAdmin) {
                    let loggedIn = await SuperAdmin.findByIdAndUpdate({ _id: superAdmin._id }, {
                        $set: {
                            isLoggedIn: true
                        }
                    })
                    console.log(loggedIn, 'logged in detatils');
                    if (loggedIn) {
                        console.log(superAdmin._id, 'id');

                        res.status(200).send({ msg: loggedIn })
                    } else {
                        res.status(500).send({ msg: 'something went wrong' })
                    }
                } else {
                    res.status(401).send({ msg: 'password doesnot match' })
                }

            } else {
                res.status(500).send({ msg: 'no user found' })
            }
        }

    } catch (error) {
            res.send(error)
    }
}

//getting user

exports.getUser=async(req,res)=>{
    try {
        const{id}=req.params
         const user=await User.findById(id)
         if(user){
             res.status(200).send({data:user})
         }else{
             res.status(500).send({msg:'something went wrong'})
         }
     } catch (error) {
         res.send(error)
     }
}
//userLogout
exports.userLogout=async(req,res)=>{
    try {
        const {id}=req.params
        console.log(id,'id');
       let user=await User.findByIdAndUpdate(id,{
       $set:{
        isLoggedIn:false
       }
       })
       console.log(user);
       if(user){
        req.status(200).send({data:user})
       }else{
        res.send(500).send({msg:'server error'})
       }
    } catch (error) {
        res.send(error)
    }
}
//adding product in database
exports.productDetails=async(req,res)=>{
    try {
        console.log(req.body);
       const {price,offerPrice,name,discription,catagory,subCatagory,image,userId}=req.body

       const result=await cloudinary.uploader.upload(image,{
        upload_preset:'restaurant',
    })
      let product=new Product({
        price,
        offerPrice,
        name,
        discription,
        catagory,
        subCatagory,
        image:result,
        userId
      })
    product.save().then((response)=>{
        console.log(response,'databaseResponse');
        if(response){
            res.status(200).send({data:'saved successfully'})
        }else{
            res.status(500).send({msg:'something went wrong'})
        }
    })
    } catch (error) {
        res.send(error)
    }
}

//getting all products
exports.AllProducts=async(req,res)=>{
    try {
     const products=await Product.find({approve:true})
     console.log(products,'database products');
     if(products){
        res.status(200).send({data:products})
     }else{
        res.status(500).send({msg:'something went wrong'})
     }
    } catch (error) {
        res.send(error)
    }
}

//save to cart
exports.saveToCart=async(req,res)=>{
    try {
        const {id}=req.params
        const product=await Product.findById(id)
        console.log(product,'products');
        if(product){
           console.log('ldlldld');

           const checkItem=await Cart.find({productId:new ObjectId(id)})
           console.log('ldlldld');
           console.log(checkItem,'...');
           if( checkItem?.length===0){
            const cart=new Cart({
                name:product.name,
                discription:product.discription,
               catagory:product.catagory,
               subCatagory:product.subCatagory,
               price:product.price,
               offerPrice:product.offerPrice,
               productId:id,
               userId:product.userId,
               image:product.image[0]

            })
        cart.save().then((response)=>{
            console.log(response,'response');
            res.status(200).send({data:response})
        })
        }else{
            res.status(500).send({msg:'item already exists'})
             
           
           }
        }
    } catch (error) {
        console.log(error,'err');
        res.send({msg:error})
    }
}
///getting cart items
exports.getCartItems=async(req,res)=>{
    try {
        const {id}=req.params
       const cartItems= await Cart.find({userId:new ObjectId(id)}) 
       console.log(cartItems,'cartItms');
       if(cartItems){
        res.status(200).send({data:cartItems})
       }else{
        res.status(200).send({msg:'something went wrong'})
       }
    } catch (error) {
        res.send(error)
    }
}