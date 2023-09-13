
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

  name:{
    type : String,
    required : true
  },
  email:{
    type : String,
    required : true,
    unique : true
  }, 

  password:{
    type : String,
     required : true
  },
  date: {
    type : Date,
    default : new Date
  }

});


const user = mongoose.model('Users', userSchema);
// user.createIndexes()
module.exports = user