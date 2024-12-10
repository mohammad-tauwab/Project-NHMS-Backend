const { executeQuery } = require("./modifypsqldB");

//the user credentials are checked here and remaining data are sent back to client.modi
const checkAuthUser = (currentUser, callback) => {
  console.log(currentUser);
  let dbQuery = "select * from authTable where loginid = $1";
  let value = [currentUser.loginid];
  executeQuery(dbQuery, value, (res) => {
    if (res.length != 0 && res[0].pwd === currentUser.pwd) {
      callback(res);
    } else callback(res);
  });

  // This code is required for reading the data from the file
  /*fs.readFile(filepath, (err, data) => {
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
};*/
};

module.exports = {
  checkAuthUser,
};
