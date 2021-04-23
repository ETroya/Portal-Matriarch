const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/user");

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

// admin updates employee profile
router.put("/profile", async (req, res) =>{
 const {id, mFirst, mLast, mUserName, mWage, mHours, mPTO} = req.body;

 try{
   const updated_profile = await User.findByIdAndUpdate(
     id,
     {first: mFirst,
    last: mLast,
    username: mUserName,
    wage: mWage,
    hours: mHours,
    pto: mPTO,
    }, { new: true,}
    );
    console.log("updated!");
     return res.json(updated_profile);
    
  }catch(error){
    console.log("error in update profile route");
    console.log(error);
  }
router.get("/getUser", async (req, res) => {
  console.log(req.data);
  res.json(req.data);
});

module.exports = router;
