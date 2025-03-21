import { User } from "../models/user.model.js";
export const authCallback=async(req,res,next)=>{
    try{
     const {id,firstName,lastName,imageUrl}=req.body;
     const user=await User.findOne({clerk:id})
    if(!user){
        //sign up
         await User.create({
             clerkId:id,
             fullName:`${firstName} ${lastName}`,
             imageUrl
         })
    }
     res.status(200).json({success:true})
 
 } catch(error){
            console.log("error in auth callback",error)
           next(error)
        }
 }