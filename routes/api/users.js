const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/user");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({
      username,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    //salt is an encryption
    console.log(password, salt, username);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.json(user);
  } catch (error) {
      console.log(error)

    res.status(500).json({ message: "Server error try again!" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error try again!" });
  }
});

module.exports = router;
