const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please provide a name"],
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
        minlenght:6
    }
})
module.exports=mongoose.model("demos",userSchema)