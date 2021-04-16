const router = require("express").Router();
const userRoutes = require("./users");
const MessageBoardRoutes = require("./messageBoardRoute");

router.use("/users", userRoutes);

router.use("/messages", MessageBoardRoutes);

module.exports = router;
