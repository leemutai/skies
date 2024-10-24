import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB   from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js'; // Correctly imports the default export
import doctorRouter from './routes/doctorRoute.js';


// app config
const app = express();
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// api routes/endpoint
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)

// localhost:4000/api/admin/add-doctor

app.get('/',(req,res)=> {
    res.send('API WORKING')
});

app.listen(port,()=> console.log("Server Started on",port))