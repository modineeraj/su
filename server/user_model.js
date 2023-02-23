const mongoose=require('mongoose');
const bcrypt= require('bcryptjs');

const userSchema=new mongoose.Schema(
    {
        userName:{type:String,required:true,},
        email:{type:String,required:true,},
        mobile:{type:Number,required:true,},
        address:{type:String,required:true},
        password:{type:String,required:true},
        active:{type:Boolean,required:true}
    },
    {
        toJSON:{virtuals:true},
        toObject:{virtuals:true},
        timestamps:true
    }
)
module.exports= new mongoose.model("users",userSchema);
