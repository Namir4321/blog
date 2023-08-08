const bcrypt=require("bcryptjs")
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const UserSchema=new Schema({
username:{
    type:String,
    required:true,
    unique:true,
},
password:{
    type:String,
    required:true,
    unique:true,
},
image:{
    type:String,
},
},
{timestamps:true}
)
UserSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10);
    }
})


module.exports=mongoose.model("user",UserSchema)

