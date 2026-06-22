const router =
  require("express").Router();

const {
  saveComparison,
  getSavedComparisons
} = require(
  "../controllers/comparison.controller"
);

router.post(
  "/",
  saveComparison
);

router.get(
  "/:userId",
  getSavedComparisons
);

module.exports = router;