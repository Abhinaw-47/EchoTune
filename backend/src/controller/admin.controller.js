 import {Song} from '../models/song.model.js'
 import {Album} from "../models/album.model.js"

const uploadToCloduinary=async(file)=>{
    try{
        const result =await uploadToCloduinary.uploader.upload(file.tempFilePath,{
            resource_type:"auto",
        })
        return result.secure_url;
    }catch(error){
        console.log("Error in uploadToCloduinary",error);
        throw new Error("Error uploading to cloudinary");
    }
}


export const createSong=async (req,res,next)=>{
    try{
        if(!req.files || !req.files.audioFile || !req.files.imageFile){
            return res.status(400).json({message:"Please upload all the files"})
        }
        const {title,artist,albumId,duration}=req.body
        const audioFile=req.files.audioFile
        const imageFile=req.files.imageFile
        const audioUrl=await uploadToCloduinary(audioFile);
        const imageUrl=await uploadToCloduinary(imageFile);


        const song=new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId || null,
        })
         await song.save()
         if(albumId){
            await Album.findByIdAndUpdate(albumId,{
                $push:{songs:song._id},
            });
         }
         req.status(201).json(song);
       
    }catch(error){
        console.log("Error in CreateSong",error)
        next(error)
         
    }
    
}