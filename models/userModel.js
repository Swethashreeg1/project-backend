// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     role: {
//         type: String,
//         enum: ['user', 'admin'],
//         default: 'user'  // Default to 'user' instead of 'admin'
//     }
// });

// // Hash the password before saving
// userSchema.pre("save", async function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     try {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

// const User = mongoose.model("User", userSchema);
// module.exports = User;
const mongoose= require("mongoose")
const bcrypt=require("bcrypt")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        reuired:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }
    const salt= await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next()
})

const user = new mongoose.model("user",userSchema)
module.exports=user;