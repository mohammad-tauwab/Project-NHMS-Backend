const { rollupVersion } = require("vite");
const { checkAuthUser } = require("../models/chekUserAuth");
const { storeDataInFile } = require("../models/storedata");
const rootDir = require("../utilities/root_directory_handler");
const path = require("path");

const home = (req, res, next) => {
  res.render("home");
};

const userAuth = (req, res, next) => {
  checkAuthUser(req.body, (validUserDetail) => {
    console.log(JSON.stringify(validUserDetail));
    res.send(JSON.stringify(validUserDetail));
  });
};

const addUser = (req, res, next) => {
  let filename = (req.body.name + ".txt").toString();
  let userAuthdata = {
    username: req.body.name,
    pwd: req.body.pwd,
    loginid: req.body.loginid,
    role: "Receptionist",
    contact: req.body.contact,
  };
  storeDataInFile(req.body, filename, "write", (message) => {
    res.send(JSON.stringify(message));
    storeDataInFile(userAuthdata, "userAuthFile.txt", "append", (message) => {
      //once the above tasked is finshied do this
      storeDataInFile(req.body, "userDataBase.txt", "append", (message) => {}); // once the above tasked is finshied do this
    });
  });
};

module.exports = {
  home,
  userAuth,
  addUser,
};
