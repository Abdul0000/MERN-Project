import historyModel from "../Models/UserHistoryData.js"

export const AddHistoryController = async(req,res)=>{
    try {
        // console.log(req.body)
        const data = await historyModel.create(req.body)
        if (data){
            return res.status(201).send({
                success:true,
                message:"Add Successfully"
            })
        }
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Fail to add",
            error
        })
    }
}

export const GetHistoryController = async(req,res)=>{
    try {
        const {userId} = req.body
        const data = await historyModel.find({userId})
        if (data){
            return res.status(200).send({
                success:true,
                message:"Fetch history Successfully",
                history:data
            })
        }
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Fail to get",
            error
        })
    }
}


export const deleteHistoryController = async(req,res)=>{
    try {
        const {userId} = req.body
        const data = await historyModel.deleteMany({userId})
        
        if (data){
            return res.status(200).send({
                success:true,
                message:"Delete history Successfully",
            })
        }
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Fail to Delete",
            error
        })
    }
}


