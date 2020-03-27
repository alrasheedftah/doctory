const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const BookedSchema = new Schema({
  name: {
    type: String,
  },
  phone:{
    type:String,
  },
  time:Number,
  doctor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'doctor'
},
user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'user'
}  
},
{timestamps:true}
);

const Booked = mongoose.model('booked', BookedSchema);

module.exports = Booked;
