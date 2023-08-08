const User=require("../Models/User");
const Post=require("../Models/Post");
// update
exports.postUpdate = async (req, res, next) => {
    console.log(req.body);
    console.log(req.params);
  
    if (req.body.userId === req.params.id) {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res
          .status(500)
          .json({ err, message: "you can update only your account" });
      }
    }
  };
  // Delete
  exports.postdelete = async (req, res, next) => {
    console.log(req.body);
    console.log(req.params);
    const user = await User.findById(req.params.id);
    if (user) {
      try {
          await Post.deleteMany({username:user.name})
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user");
      } catch (err) {
        res.status(500).json(err);
      }
    }
  };
  exports.getUser = async (req, res, next) => {
        try {
          const user=await User.findById(req.params.id);  
          const {password,...others}=user._doc;

          res.status(200).json(others);
        } catch (err) {
          res.status(500).json(err);
        }
      }
  