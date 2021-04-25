const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

//logging out of the page
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
