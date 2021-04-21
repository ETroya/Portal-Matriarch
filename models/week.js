const mongoose = require("mongoose");

const week1 = {
  // days: [
  //   {
  date: Date,
  shifts: [
    {
      shiftType: {
        type: String,
        default: "9-5",
      },
      employees: [mongoose.Schema.Types.ObjectID],
    },
  ],
  //   },
  // ],
  // eslint-disable-next-line prettier/prettier
};

const week = mongoose.model("week", week1);

module.exports = week;
