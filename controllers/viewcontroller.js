const { checkAuthUser } = require("../models/chekUserAuth");

const home = (req, res, next) => {
  res.render("home");
};

const userAuth = (req, res, next) => {
  let validUser;
  checkAuthUser((validUser) => {
    validUser = validUser;
  });
  res.send(validUser);
};

module.exports = {
  home,
  userAuth,
};
