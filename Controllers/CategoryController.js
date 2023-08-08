const Category = require("../Models/Category");
const categories = require("../Models/Category");
exports.postCategory=async(req,res,next)=>{
   console.log(req.body)
    const newCat=new Category(req.body);
   console.log(newCat)

    try{
const saveCat=await newCat.save();
res.status(200).json({saveCat,message:"created",saveCat})

    }catch(err){
        res.status(500).json({err,message:"not created"})
    }
}

exports.getallCategory=async(req,res,next)=>{
    console.log(req.body)
       try{
const cats=await Category.find()
res.status(200).json(cats)

    }catch(err){
        res.status(500).json({err,message:"not created"})
    }
}