const {mongoose,Schema} = require("mongoose");
const UserSchema = new mongoose.Schema({

  userName : {
    type : String,
    trim : true
  },
  password : {
    type : String,
    trim : true
  },
  address: {
    type: String,
    trim : true
  },
  emailId: { 
    type: String
  },
  mobileNo: { 
    type: Number,
    required:true,
    unique:true 
  }
});

const User = mongoose.model("User", UserSchema); // users
module.exports = User;