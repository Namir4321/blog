const express=require("express");
const router=express.Router();
const categoriesController=require("../Controllers/CategoryController")
router.post("/",categoriesController.postCategory)
router.get("/",categoriesController.getallCategory)

module.exports=router;