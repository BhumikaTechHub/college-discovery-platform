const router = require("express").Router();


const {
  getColleges,
  getCollegeById,
  compareColleges,
} = require(
  "../controllers/college.controller"
);

router.get("/", getColleges);

router.get(
  "/compare",
  compareColleges
);

router.get(
  "/:id",
  getCollegeById
);

module.exports = router;