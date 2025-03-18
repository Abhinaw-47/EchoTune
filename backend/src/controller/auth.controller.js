import { User } from "../models/user.model.js";
export const authCallback=async(req,res)=>{
    try{
     const {id,firstName,lastName,imageUrl}=req.body;
     const user=await User.findOne({id})
    if(!user){
         await User.create({
             clerkId:id,
             fullName:`${firstName} ${lastName}`,
             imageUrl
         })
    }
     res.status(200).json({success:true})
 
 } catch(error){
            console.og("error in auth callback",error)
            res.status(500).json({success:false,message:"internal server error"})
        }
 }