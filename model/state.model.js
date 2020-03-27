const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const StateSchema = new Schema({
  name: {
    type: String,
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
},
{timestamps:true}
);

const State = mongoose.model('state', StateSchema);

module.exports = State;
