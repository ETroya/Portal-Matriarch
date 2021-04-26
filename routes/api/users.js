const withAuth = require("../../config/middleware/isAuthenticated");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/user");


const isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log("[WARNING] Not auth");
    res.json(req.isAuthenticated());
    return res.status(401).send("Not Authorized");
  }
  return next();
};

router.post("/", async (req, res) => {
  const {
    username,
    first,
    last,
    password,
    city,
    wage,
    hours,
    pto,
    upt,
    vacation,
    admin,
  } = req.body;
  console.log(req.body);
  try {
    const user = new User({
      username,
      first,
      last,
      password,
      city,
      wage,
      hours,
      pto,
      upt,
      vacation,
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
    console.log("[WARNING] from within admin route");
    console.log(error);

    res.status(500).json({ message: "Server error try again!" });
  }
});

router.get("/admin", isAuth, async (req, res) => {
  try {
    res.json(req.user.admin);
  } catch (error) {
    console.log(error);
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

// admin updates employee profile
router.put("/profile", async (req, res) => {
  const { id, mFirst, mLast, mUserName, mWage, mHours, mPTO } = req.body;
  console.log(id);
  console.log(mWage);

  try {
    const updatedProfile = await User.findByIdAndUpdate(
      id,
      {
        first: mFirst,
        last: mLast,
        username: mUserName,
        wage: mWage,
        hours: mHours,
        pto: mPTO,
      },
      { new: true }
    );
    console.log("updated!");
    return res.json(updatedProfile);
  } catch (error) {
    console.log("error in update profile route");
    console.log(error);
  }
});

//get single user
router.get("/getUser", async (req, res) => {
  console.log(req.data);
  res.json(req.data);
});
//500 error
router.get("/user", withAuth, async (req, res) => {
  try {
    const user = await User.findById(req.session.passport.user._id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "User is not logged in" });
  }
});

router.post("/logout", withAuth, (req, res) => {
  req.session.destroy(() => {
    res.status(204).end();
  });
});

module.exports = router;
