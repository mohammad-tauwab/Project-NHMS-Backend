const express = require("express");
const { home, userAuth } = require("../controllers/viewcontroller");
const router = express.Router();

router.get("/", home);
router.post("/auth", userAuth);
router.get("/auth", userAuth);

module.exports = router;
