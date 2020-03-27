const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const StateSchema = new Schema({
  name: {
    type: String,
  },

  icon:{
    type:String,defualt:'profile.jpg'
},

},
{timestamps:true}
);

const Specialty = mongoose.model('specialty', StateSchema);

module.exports = Specialty;
