const routers= require("express").Router();
const userRoutes= require("./users");

routers.use("/users",userRoutes);

module.exports= router;

