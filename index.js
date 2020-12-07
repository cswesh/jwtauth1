const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser:true, useUnifiedTopology: true },
    () => console.log('connect to db')
);

const authRoute=require('./routes/auth');
const postRoute = require('./routes/post')
app.use(express.json());
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);


app.listen(process.env.PORT,()=>(console.log(`Server is up & running`)));