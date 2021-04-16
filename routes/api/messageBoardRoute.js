const express = require("express");
const router = express.Router();
const MessageBoard = require("../../models/messageBoardModel");
const { route } = require("./users");

const isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("Not Authorized");
  }
  return next();
};

router.post("/newpost", isAuth, async (req, res) => {
  const { author, title, content } = req.body;
  console.log(req.user);
  console.log(req.isAuthenticated());
  try {
    const newpost = new MessageBoard({
      author: req.user.first,
      title,
      content,
      addComment: false,
      comments: [],
      commentCount: 0,
    });

    await newpost.save();
    res.json(newpost);
  } catch (error) {
    console.log("Something broke!");
    console.log(error);
    res.status(500).json({ message: "Its not me... its you!" });
  }
});

// get route will go here to retrieve data
router.get("/getposts", async (req, res) => {
  try {
    const all_post = await MessageBoard.find();
    res.json(all_post);
  } catch {
    console.log("Something broke on the get!");
    console.log(error);
    res.status(500).json({ message: "The get broke. Its not me... its you!" });
  }
});

// get put will update post or comment

// get delete will delete post or comment

module.exports = router;
