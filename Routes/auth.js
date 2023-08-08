const express=require("express");
const router=express.Router();
const authController=require("../Controllers/AuthController");
router.post("/register",authController.postRegister)
router.post("/login",authController.postlogin)

module.exports=router;