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
    username: "Carlos",
    password: "1234",
    admin: "true",
    city: "Riverside,CA"
  },
  {
    username: "Edwin",
    password: "5678",
    admin: "true",
    city: "Riverside,CA"
  },
  {
    username: "Eric",
    password: "9123",
    admin: "true",
    city: "Eastvale,CA"
  },
  {
    username: "Marlon",
    password: "abcd",
    admin: "true",
    city: "San Diego,CA"
  },
  {
    username: "Amar",
    password: "efgh",
    admin: "true",
    city: "Highland,CA"
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
