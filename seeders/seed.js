let mongoose = require("mongoose");
let db = require("../models");
require("dotenv").config();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/adminEmployee",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

mongoose.connection.on("connected", () => {
  console.log("connected to mongoose");
});

let employeesSeed = [
  {
    username: "carlos",

    password: "1234",
  },
  {
    username: "edwin",

    password: "5678",
  },
  {
    username: "eric",

    password: "9123",
  },
  {
    username: "marlon",

    password: "abcd",
  },
  {
    username: "amar",

    password: "efgh",
  },
];

db.employee
  .deleteMany({})
  .then(() => db.employee.collection.insertMany(employeesSeed))
  .then((data) => {
    console.log(data.result.n + " user inputted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
