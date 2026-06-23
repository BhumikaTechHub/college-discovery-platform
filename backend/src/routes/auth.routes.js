const router =
require("express").Router();

router.get("/test", (req, res) => {
  res.json({
    message: "auth route working"
  });
});

const {
 register,
 login
} = require("../controllers/auth.controller");

router.post("/register",register);

router.post("/login",login);

module.exports = router;