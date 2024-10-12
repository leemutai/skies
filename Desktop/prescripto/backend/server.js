import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB   from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

// app config
const app = express();
const port = process.env.port || 4000
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// api routes/endpoint

app.get('/',(req,res)=> {
    res.send('API WORKING')
})

app.listen(port,()=> console.log("Server Started",port))