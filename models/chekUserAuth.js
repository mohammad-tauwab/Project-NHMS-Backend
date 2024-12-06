const fs = require("fs");
const rootDir = require("../utilities/root_directory_handler");
const path = require("path");

const filepath = path.join(rootDir, "models", "database", "userAuthFile.txt");
let userList = [];

//the user credentials are checked here and remaining data are sent back to client.
const checkAuthUser = (currentUser, callback) => {
  let userObj = {};
  fs.readFile(filepath, (err, data) => {
    !err ? (userList = JSON.parse(data)) : console.log(err);
    if (userList.length != 0) {
      userList.forEach((user) => {
        if (
          currentUser.loginid == user.loginid &&
          currentUser.pwd == user.pwd
        ) {
          userObj.role = user.role;
          userObj.contact = user.contact;
          userObj.username = user.username;
        }
      });
      callback(userObj);
    } else callback(userObj);
  });
};

module.exports = {
  checkAuthUser,
};
