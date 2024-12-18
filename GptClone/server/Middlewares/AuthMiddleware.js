import JWT from "jsonwebtoken";

export const requireLogin = async(req,res,next)=>{

    try {
        const decode = JWT.verify(req.headers.authorization,process.env.KEY);
        req.user= decode;
        next();
    } catch (error) {
        console.log(error);    
    }
}