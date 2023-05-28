const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/Auth');
const UserRoute = require('./routes/User');
const PostRoute = require('./routes/Post');
const CategoriesRoute = require('./routes/Categories');


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
     useUnifiedTopology : true
}).then(console.log("Mongodb Connected")).catch((err)=>{console.log(err)})

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },
    filename : (req,file,cb)=>{
        cb(null,req.body.name)
    },
})

const upload = multer({storage:storage});


app.post('/api/upload',upload.single('file'),(req,res)=>{
    res.status(200).json("File uploaded successfully");
})

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api/auth',authRoute);
app.use('/api/users',UserRoute);
app.use('/api/post',PostRoute);
app.use('/api/categories',CategoriesRoute);

app.use('/',(req,res)=>{
    res.status(200).send("Running")
})

app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`);
})
