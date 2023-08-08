const express=require("express");
const router=express.Router();
const postController=require("../Controllers/PostController");
router.post("/",postController.createPost)
router.put("/:id",postController.updatePost)
router.delete("/:id", postController.deletePost);
router.get("/:id",postController.getPost)
router.get("/:id",postController.getPost)
router.get("/",postController.getallPost)

module.exports=router;