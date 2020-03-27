const mongoose=require('mongoose')
const DB_URL="mongodb://localhost:27017/chat-app"

const userScheema=mongoose.Schema({
    name:String,
    email:String,
    price:Number,
    information:String,
    views:Number,
    evaluation:Number,
    waiting:Number,
    phone:String,
    cities:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'city'
    },
    image:{
        type:String,defualt:'profile.jpg'
    },

    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          // required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },
      specialty:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'specialty'
      }
},
{timestamps:true}
)

const Doctor=mongoose.model("doctor",userScheema)

exports.Doctor=Doctor
