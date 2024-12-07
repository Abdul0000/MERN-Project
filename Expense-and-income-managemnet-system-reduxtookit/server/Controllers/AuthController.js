import JWT  from "jsonwebtoken"
import { encryptPassword ,comparePasswrod} from "../EncyptDecryptPassword/encryptPassword.js"
import AuthModel from "../Models/AuthModel.js"

//signup
export const signupController = async(req,res)=>{
    try {
        const {name,email,question,password} = req.body
        if (!name || !email || !question || !password){
            return res.send("Required all fields")
        }
        const checkUser = await AuthModel.findOne({email})
        if(checkUser){
            return res.send("Email already registered")
        }
        const encryptedPassword = await encryptPassword(password)
        const register = await AuthModel.create({...req.body,password:encryptedPassword})
        if (register){
            return res.status(201).send({
                success:true,
                message:"Registered Successfully"
            })
        }
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Fail to Register",
            error
        })
    }
}

export const loginController = async(req, res)=>{
    try {
        const {email,password} = req.body
        if (!email||!password){
            return res.send("Required all fields")
        }
      
        const userCheck = await AuthModel.findOne({email})
        if (!userCheck){
            return res.send("Email not registered")
        }
        
        const checkPassword = await comparePasswrod(password, userCheck.password)
        const token= await JWT.sign({_id:userCheck._id},process.env.KEY,{expiresIn:"1d"})

        if (checkPassword){
            return res.status(200).send({
                success:true,
                message:"Login Successfully",
                user : {
                    _id:userCheck._id,
                    name:userCheck.name,
                    email:userCheck.email,
                    question:userCheck.question,
                },
                token
            })
        }
        else 
        {
            return res.send("Email or password invalid")
        }
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Fail to Login",
            error
        })
    }
} 

export const forgetPasswordController = async(req, res)=>{
    try {
        const {email,question,password} = req.body
        if (!email||!question){
            return res.send("Required all fields")
        }
        const encryptedPassword = await encryptPassword(password)
        const user = await AuthModel.findOneAndUpdate( { email, question }, { password: encryptedPassword }, { new: true } );
        if (!user){
            return res.send("Email not or question incorrect")
        }

        if (user){
            return res.status(200).send({
                success:true,
                message:"Update Successfully",
            })
        }
        
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Fail to Update",
            error
        })
    }
} 
