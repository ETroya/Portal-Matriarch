const express = require("express");
const { reset } = require("nodemon");
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
  const { title, content } = req.body;
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
// called from comment component
router.put("/comment", async (req, res) => {
  const { comment, id, commentCount } = req.body;

  const authoerFullName = `${req.user.first} ${req.user.last}`;
  const authID = req.user._id;
  try {
    const new_comment = await MessageBoard.findByIdAndUpdate(
      { _id: id },
      {
        commentCount: commentCount + 1,
        $push: {
          comments: {
            author: authoerFullName,
            authorUserName: req.user.username,
            authorID: authID,
            content: comment,
            likes: 0,
          },
        },
      },
      {
        new: true,
      }
    );

    return res.json(new_comment);
  } catch (error) {
    console.log(error);
  }
});

// admin deletes a post from the database
router.delete("/deletePost", isAuth, async (req, res, next) => {
  const id = req.body.id;

  try {
    const deletePost = await MessageBoard.findByIdAndDelete(id);

    res.status(200).json({ message: "Post deleted" });

    next();
  } catch (error) {
    console.log("error in delete post");
    console.log(error);
  }
});

/**
 * Deletes comment from post
 */
router.put("/deleteComment", isAuth, async (req, res) => {
  const { commentID, postID, commentCount } = req.body;
  console.log("[INFO] ID'S FROM DELETECOMMENT");
  console.log(commentID);
  console.log(postID);

  try {

    const delete_comment = await MessageBoard.findByIdAndUpdate(
      { _id: commentID },
      {
        commentCount: commentCount - 1,
        $pull: {
          comments: {
            _id: postID
          },
        },
      }
    );

    res.status(200).json({message: "comment deleted"});
    console.log("deleted");
    
    return res.json(delete_comment);


  } catch (error) {

    console.log("[WARNING] ERROR IN DELETE COMMENT ROUTE");
    console.log(error);
  };
});

module.exports = router;
