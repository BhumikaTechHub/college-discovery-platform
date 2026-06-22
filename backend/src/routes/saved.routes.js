const router =
  require("express").Router();

const {
  saveCollege,
  getSavedColleges,
} = require(
  "../controllers/saved.controller"
);

router.post(
  "/",
  saveCollege
);

router.get(
  "/:userId",
  getSavedColleges
);

module.exports = router;