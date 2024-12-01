const { checkAuthUser } = require("../models/chekUserAuth");

const home = (req, res, next) => {
  res.render("home");
};

const userAuth = (req, res, next) => {
  checkAuthUser((validUser) => {
    console.log(JSON.stringify(validUser));
    res.send(JSON.stringify(validUser));
  });
};

module.exports = {
  home,
  userAuth,
};
