import validator from "validator"
import doctorModel from "../models/doctorModel.js"
// API for adding doctors
const addDoctor=async(req,res)=>{
    try{
        const{name,email,password,speciality,degree,experience,about,fees,address} =req.body
        const imageFile = req.file
        
        // checking for all data to add
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({success:false,message:"Missing details"})
        }

        // checking valid email
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email!"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Please choose a strong password!"})
        }
        //hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true,message:"Doctor Added"})
    } catch(error){
      console.log(error)
      res.json({success:false,message:error.message})
    }
}

export {addDoctor}