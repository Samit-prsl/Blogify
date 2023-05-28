const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.Password, salt);
    const newUser = new User({
      Username: req.body.Username,
      Email: req.body.Email,
      Password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ Username: req.body.Username});
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.Password, user.Password);
    !validated && res.status(400).json("Wrong credentials!");

    const { Password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;