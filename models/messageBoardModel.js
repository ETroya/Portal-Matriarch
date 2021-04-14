const mongoose = require("mongoose");

const messageBoardSchema = {
  author: String,
  title: String,
  content: String,
  addComment: Boolean,
  comments: [
    {
      author: String,
      content: String,
      likes: Number,
    },
  ],
  commentCount: Number,
};

const MessageBoard = mongoose.model("MessageBoard", messageBoardSchema);

module.exports = MessageBoard;
