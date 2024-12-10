const express = require("express");
const { home, userAuth, addUser, fetchUser } = require("../controllers/viewcontroller");
const router = express.Router();

router.get("/", home);
router.use("/auth", userAuth);

router.use("/adduser", addUser);
router.use('/fetchuser',fetchUser);

module.exports = router;
