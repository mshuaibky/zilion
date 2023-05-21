const express=require('express')
const app=express()
require ('dotenv').config()
const cors=require('cors')
const morgan=require('morgan')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')



//Routes
const userRoutes=require('./routes/user')
const adminRoutes=require('./routes/admin')
const superRoutes=require('./routes/super')

app.use(cors({

    credentials:true,
    methods:["GET","POST"],
    origin:true,
    origin:["http://127.0.0.1:5173"],
}))
// app.use(morgan('combined'))
app.use(cookieParser())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true}));

//DB connection
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('DB CONNECTED');
}).catch((error)=>{
    console.log(error.message);
})
// //session
// app.use(session({
//     secret: "SESSION_SECRET",
//     resave: false,
//     saveUninitialized: true
//   }));
  
app.use('/',userRoutes)
app.use('/admin',adminRoutes)
app.use('/super',superRoutes)

//port
const port =process.env.PORT;

//starting app
app.listen(port,()=>{
    console.log(`app is running in port ${port} succesfully`);
})
