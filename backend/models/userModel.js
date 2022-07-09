const mongoose = require('mongoose');

// user schema
const userSchema = mongoose.Schema({
 lastname: {
   type: String,
   required: [true, 'Lastname is required']
 },
 firstname: {
  type: String,
  required: [true, 'Firstname is required']
},
email: {
 type: String,
 required: [true, 'Email is required'],
 unique: true
},
password: {
 type: String,
 required: [true, 'Lastname is required']
},
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema)