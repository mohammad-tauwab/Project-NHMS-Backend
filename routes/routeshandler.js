const express = require("express");
const { home, userAuth, addUser } = require("../controllers/viewcontroller");
const router = express.Router();

router.get("/", home);
router.post("/auth", userAuth);
router.get("/auth", userAuth);
router.post("/adduser", addUser);
router.get("/adduser", addUser);

module.exports = router;
