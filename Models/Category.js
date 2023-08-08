const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const CategorySchema=Schema({
name:{
    type:String,
    required:true,
    unique:[true,"category name already exists"]
},
},
{timestamp:true}
)
module.exports=mongoose.model("Category",CategorySchema)