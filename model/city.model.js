const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const StateSchema = new Schema({
  name: {
    type: String,
  },
  state:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'state'
},
  
},
{timestamps:true}
);

const City = mongoose.model('city', StateSchema);

module.exports = City;
