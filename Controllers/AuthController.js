const User = require("../Models/User");
const bcrypt=require("bcryptjs")
exports.postRegister = async (req, res, next) => {
  try {
    console.log(req.body);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      image:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    });
    const user = await newUser.save();

    res.status(200).json({ user, message: "alright you are registered" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ err, message: "something is wrong here" });
  }
};
exports.postlogin = async (req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.password);

  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("wrong credentials");
    }
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json("wrong credentials");
    }
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

