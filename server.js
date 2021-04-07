const express = require("express");
const passport = require("./config/passport");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

<<<<<<< HEAD
app.get("/", req,res)=>res.send("hello World ")
=======
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
>>>>>>> cfa763972b5c5bf06b36620100f1c8c7b8c0fa74
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

