// import mongoose from "mongoose";

// const userSchema = mongoose.Schema({
//     fullName:{
//         type:String,
//         required:true,

//         },
//         email:{
//             type:String,
//             required:true,
//             unique:true,
//         },
//        password: {
//         type:String,
//         required:true,

//         },
// });

// const User = mongoose.model("User",userSchema);
// export default User;




import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  loginAttempts: {
    type: Number,
    default: 0,
  },
  lockUntil: {
    type: Date,
  },
});

// Method to check if user is locked
userSchema.methods.isLocked = function () {
  return this.lockUntil && this.lockUntil > Date.now();
};

const User = mongoose.model("User", userSchema);
export default User;
