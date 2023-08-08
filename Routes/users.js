const express=require("express");
const router=express.Router();
const userController=require("../Controllers/UserController");
router.put("/:id",userController.postUpdate)   
router.delete("/:id",userController.postdelete)
router.get("/:id",userController.getUser)

module.exports=router;