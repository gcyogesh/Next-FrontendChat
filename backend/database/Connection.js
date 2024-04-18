import mongoose from "mongoose";



const Connection = ()=>{
    mongoose.connect(process.env.DB).then(()=>{
        console.log("Database is connected sucessfully!")

    }).catch((err)=>{
        console.log(err, "Error connecting database");
    })
}

export default Connection;