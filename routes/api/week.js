const router = require("express").Router();
const Week = require("../../models/week");

router.post("/", async (req, res) => {
  const { date, employees } = req.body;
  console.log(req.body);
  try {
    const week = new Week({
      // Monday,
      // Tuesday,
      // Wednesday,
      // Thursday,
      // Friday,
      days: [
        {
          date,
          shifts: [
            {
              employees,
            },
          ],
        },
      ],
    });
    await week.save();
    res.json(week);
  } catch (error) {
    console.log(error);
  }
});

