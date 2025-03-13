const jwt=require("jsonwebtoken");
const SecretKey="asd!@#567ASDDDD";
function verifyToken(req,res,next){
   const bearer=req.headers['authorization'];
   if(typeof bearer !== 'undefined'){
      const token=bearer.split(' ')[1];
      jwt.verify(token,SecretKey,(err,authData)=>{
          if(err){
            res.json({"err":1,"msg":"Token expire"});
          }
          else{
              next();
          }
      })
   }
   else{
       res.json({"err":1,"msg":"Token not found"});
   }
}
module.exports=verifyToken;