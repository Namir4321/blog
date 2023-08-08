const User = require("../Models/User");
const Post = require("../Models/Post");
// createPost
exports.createPost = async (req, res, next) => {
  console.log(req.body)
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json({ savedPost, message: "saved" });
  } catch (err) {
    res.status(500).json({ err, message: " not saved" });
  }
};
// update Post
exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username === req.body.username) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
          );
          res.status(200).json({updatePost,message:"updated"})
      } catch (err) {
        res.status(200).json({ err, message: "not updated" });
      }
    }
  } catch (err) {
    res.status(200).json({ err, message: "not updated err" });
  }
};

// Delete Post
exports.deletePost = async (req, res, next) => {
  console.log(req.params.id)  
  console.log(req.body.username)
  try {
    const post = await Post.findById(req.params.id);
    console.log(post)
    if (post.username === req.body.username) {
      await post.deleteOne();
      res.status(200).json("deleted")
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//   get Post
exports.getPost = async (req, res, next) => {
  console.log(req.params.id)
  try { 
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.getallPost = async (req, res, next) => {
  console.log(req.body)
    const username=req.query.user;
    const catName=req.body.cat;
    console.log(catName)
    console.log(username)

    try { 
      let post;
      if(username){
        post=await Post.find({username})
      }else if(catName){
        post=await Post.find({categories:{
            $in:[catName]
        }})
      }else{
        post=await Post.find();
      }

      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  