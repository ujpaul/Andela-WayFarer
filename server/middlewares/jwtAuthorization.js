import  jwt from'jsonwebtoken';
//import users from '../models/user_file';

//  function createToken (req,res,next) {
//     return jwt.sign({email:req.body.email},'jwtPrivateKey');
// }
 const verifyToken = (req,res, next) => {
    const header = req.headers['authorization']; //|| req.headers['Authorization'];
    
    if(!header) {
       return res.status(403).send('You are not authorized');
    } else {
        const token = header.split(' ')[1];
         const decoded =jwt.verify(token,'jwtPrivateKey');
         
        req.user = decoded;
        next();
        return decoded;
     }

 
}

// exports.modules = {
//     createToken,
//     verifyToken
// }    
export default verifyToken