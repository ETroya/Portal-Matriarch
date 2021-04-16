const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/user");

router.post("/", async (req, res) => {
  const { username, first, last, admin, password, city } = req.body;
  console.log(req.body);
  try {
    const user = new User({
      username,
      first,
      last,
      password,
      city,
      admin,
    });

    const salt = await bcrypt.genSalt(10);
    //salt is an encryption
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error try again!" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    req.logIn(user, () => {
      console.log(user);
      res.json(user);
    });
  } catch (error) {
    console.log(error);

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
