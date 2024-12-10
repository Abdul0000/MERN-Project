import mongoose from 'mongoose'

const AuthSchema = new mongoose.Schema({
    name:{type: String ,require:true},
    email:{type: String ,require:true},
    question:{type: String ,require:true},
    password:{type: String ,require:true},
    role:{type: Number,default:0}
})

export default mongoose.model('register',AuthSchema)