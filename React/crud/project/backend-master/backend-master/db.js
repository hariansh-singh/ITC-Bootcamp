const mongoose=require('mongoose')
const Connection_String="mongodb://127.0.0.1:27017/qprofile_project";
//const 
 //Connection_String="mongodb+srv://sumitmern123:DIDd4jcBrkp3ozYf@cluster0.cpe26ns.mongodb.net/qprofile_project?retryWrites=true&w=majority";
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
