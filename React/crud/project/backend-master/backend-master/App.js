const express=require('express');
const cors=require('cors');
const connection=require('./db');
//db connection 
connection().catch(err=> console.log(err));
//end
const PORT=8888;
const app=express();
app.use(cors());
app.use("/Images",express.static("uploads"));
const api_Routes=require('./routes/Api_Routes');
app.use(express.json());//to parse post data 
app.use("/",api_Routes);
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server work on ${PORT}`)
})
