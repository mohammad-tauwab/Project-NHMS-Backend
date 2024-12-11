const express = require("express");
const { home, userAuth, addUser, fetchUser, deleteAndUpdateUser } = require("../controllers/viewcontroller");
const router = express.Router();

router.get("/", home);
router.use("/auth", userAuth);

router.use("/adduser", addUser);
router.use('/fetchuser',fetchUser);
router.use('/deleteuser',deleteAndUpdateUser);

module.exports = router;
