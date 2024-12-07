const { rollupVersion } = require("vite");
const { checkAuthUser } = require("../models/chekUserAuth");
const { storeUserData } = require("../models/storedata");
const rootDir = require("../utilities/root_directory_handler");
const path = require("path");

const home = (req, res, next) => {
  res.render("home");
};

const userAuth = (req, res, next) => {
  checkAuthUser(req.body, (validUserDetail) => {
    console.log("read data is", validUserDetail);
    res.send(validUserDetail);
  });
};

const addUser = (req, res, next) => {
  // let filename = (req.body.name + ".txt").toString(); this code for witing in file
  //let filename = req.body.name.toString();
  let userAuthdata = {
    name: req.body.name,
    pwd: req.body.pwd,
    loginid: req.body.loginid,
    roles: "General User",
    mobile: req.body.contact,
  };
  storeUserData(req.body, "user", (message) => {
    res.send(JSON.stringify(message));
    storeUserData(userAuthdata, "authtable", (message) => {
      //once the data is written to the database we are calling back the function (view controller) with the response
    });
  });
};

module.exports = {
  home,
  userAuth,
  addUser,
};
