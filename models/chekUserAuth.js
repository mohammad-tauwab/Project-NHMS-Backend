const fs = require("fs");
const rootDir = require("../utilities/root_directory_handler");
const path = require("path");

const filepath = path.join(rootDir, "models", "database", "userAuthFile.txt");
let loggeduser = { name: "admin", pwd: "admin786" };
let userList = [];
let userObj = {};
const checkAuthUser = (callback) => {
  fs.readFile(filepath, (err, data) => {
    !err ? (userList = JSON.parse(data)) : console.log(err);
    if (userList.length != 0) {
      userList.forEach((user) => {
        if (loggeduser.name == user.name && loggeduser.pwd == user.pwd) {
          userObj.role = user.role;
          userObj.contact = user.contact;
        }
      });
      callback(userObj);
    } else callback(userObj);
  });
};

module.exports = {
  checkAuthUser,
};
