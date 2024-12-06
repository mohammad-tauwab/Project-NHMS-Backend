const express = require("express");
const { home, userAuth, addUser } = require("../controllers/viewcontroller");
const router = express.Router();

router.get("/", home);
router.use("/auth", userAuth);

router.use("/adduser", addUser);

module.exports = router;
