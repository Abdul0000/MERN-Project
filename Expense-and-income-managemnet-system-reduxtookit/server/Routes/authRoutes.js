import express from 'express'
import { signupController ,loginController, forgetPasswordController} from '../Controllers/AuthController.js'
import { requireLogin } from '../Middlewares/AuthMiddleware.js'

const router = express.Router()

//routes
router.post('/signup',signupController)

//login
router.post('/login',loginController)
//forget password
router.post('/forget-password',forgetPasswordController)
router.get('/verify',requireLogin,(req,res)=>{
    res.status(200).send({
        success:true,
        messgae:"Verified"
    })
})
export default router