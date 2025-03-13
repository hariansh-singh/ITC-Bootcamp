const mongoose=require('mongoose')
// const Connection_String="mongodb://127.0.0.1:27017/qprofile_project";
//const 
Connection_String="mongodb+srv://admin_CU:ptN4vd0w5rK0024j@cluster0.3tqjw.mongodb.net/";
async function connection(){
    try{
        await mongoose.connect(Connection_String);
        console.log("MongoDb Connected")
        }
        catch(err){
            console.log("Connection Err"+err)
        }
}
module.exports=connection;
