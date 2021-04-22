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
      createdOn: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  commentCount: Number,
  createdOn: {
    type: Date,
    default: Date.now,
  },
};

const MessageBoard = mongoose.model("MessageBoard", messageBoardSchema);

module.exports = MessageBoard;
