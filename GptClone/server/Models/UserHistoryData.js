import mongoose from "mongoose";

const HistorySchema = new mongoose.Schema({
    
    userId : {type: String ,required:true},
    history:[{
        prompt:{type: String,required:true},
        response:{type:String,required:true}
        }]
    })
const historyModel = mongoose.model('gptHisyory',HistorySchema)
export default historyModel