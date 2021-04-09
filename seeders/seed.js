let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/user", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let userSeed = [
    {
        username: [
            {
                name: "carlos"
            }
        ],
        password: [
            {
                pass: "1234"
            }
        ],
    },
    {
        username: [
            {
                name: "edwin"
            }
        ],
        password: [
            {
                pass: "5678"
            }
        ],
    },
    {
        username: [
            {
                name: "eric"
            }
        ],
        password: [
            {
                pass: "9123"
            }
        ],
    },
    {
        username: [
            {
                name: "marlon"
            }
        ],
        password: [
            {
                pass: "abcd"
            }
        ],
    },
    {
        username: [
            {
                name: "amar"
            }
        ],
        password: [
            {
                pass: "efgh"
            }
        ],
    }
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " users inputted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });