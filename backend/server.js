import express from 'express';
import dotenv from 'dotenv'
import Connection from './database/Connection.js';


dotenv.config();

const app = express();
Connection()




const port  =  process.env.PORT
app.listen(port,(req,res)=>{
    console.log(`Our development server is running on port https://localhost:${port}`)


})