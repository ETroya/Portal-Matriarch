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

//! What does this do ??????
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
/**
 * Logs the user out of the site
 */
router.post("/logout", async (req, res) => {
  console.log("[INFO] req.session");
  console.log(req.session);

  try {
    req.logout();

    // If user seeion is not active
    if (req.session) {
      // Destroy the seesion
      req.session = null;
      res.status(204).end();
    } else {
      //Even if session is not active, send user to login screen
      res.redirect("/login");
    }
  } catch (error) {
    console.log("[WARNING] ERROR IN LOGOUT ROUTE");
    console.log(error);
    res.status(404).end();
  }
  // logs the user out

  // if (req.isAuthenticated()) {
  //   console.log(req.isAuthenticated());
  //   req.logout();
  //   req.session = null;
  //     console.log("account logout");
  //     res.status(204).end();
  //     console.log(req.isAuthenticated());
  //     res.redirect("/login");
  // } else {
  //   res.status(404).end();
  // }
});

router.put("/updateEvent", async (req, res) => {
  const {eventTitle, eventDate} = req.body;
  console.log("[INFO] INFO FROM EVENT ROUTE");
  console.log(eventTitle);
  console.log(eventDate);
  try {
    const new_event = await User.findByIdAndUpdate(req.user._id, 
      {
        $push: {
          events: {
            title: eventTitle,
            date: eventDate,
          } 
        }
      });
      console.log("Bingo Bango!!!!");
      return res.json(new_event);
  } catch (error) {
    console.log("[WARNING] ERROR IN UPDATE EVENT ROUTE");
    console.log(error);
  };
})

module.exports = router;
