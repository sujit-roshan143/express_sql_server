import userModel from "../Model/userModel.js";

export const createUserController = async(req,res) => {
    try{ 
        const{name,email,passwords}=req.body
        const response = await userModel.createuserModel({name,email,passwords});
        res.status(201).json({
            message: "User added",
            userId: response
         })
     }
    catch(err){
        res.status(500).json({message: "invalid data"})
    }
}