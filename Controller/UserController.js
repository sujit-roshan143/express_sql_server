import userModel from "../Model/userModel.js";

//users create
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

//get all users
export const getAllUserController = async(req,res) => {
    try{
        const data = await userModel.getAlluserModels();
        res.json(data)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}
export const updateuserPasswordsController = async (req,res) => {
    try{
        const{passwords} = req.body;
        const updatePasswords = await userModel.updateuserPasswordsModel(req.params.id,{passwords});
        if(!updatePasswords){
            res.json(({message:"user not found "}))
        }
        else{
            res.json({message:"password has been updated"})
        }
        }catch (err){
            res.status(500).json({error: err.message})
        }
}

export const deleteuserController = async (req,res) => {
    try{
        const deleteuser = await userModel.DeleteRowsModel(req.params.id);

        if(deleteuser == 0){
             res.json(({message:"user not found "}))
            }
        else{
            res.json({message:"user has been deleted"})
        }
    }catch (err){
        res.status(500).json({error: err.message})
    }
}