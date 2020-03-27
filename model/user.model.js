const mongoose=require('mongoose')

const userScheema=mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    gender:String,
    birth:Date,
    isDoctor:{
        type:Boolean,
        default:false
    }
    
},
{ timestamps:true }
)

const User=mongoose.model("user",userScheema)

module.exports = User;
