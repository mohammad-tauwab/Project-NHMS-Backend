const { checkAuthUser } = require("../models/chekUserAuth");
const { executeQuery } = require("../models/modifypsqldB");
const { storeUserData } = require("../models/storedata");

const home = (req, res, next) => {
  res.render("home");
};

const userAuth = (req, res, next) => {
  let fetchedData = [];
  checkAuthUser(req.body, (validUserDetail) => {
    fetchedData.push(validUserDetail[0]); //getting the user details from authtable to authentictae user and adding it to data array
    executeQuery(
      // now getting the roles assigned to the user so that it can be reflected while login and pushing it to the data array
      "select role from users where loginid = $1",
      [validUserDetail[0].loginid],
      (userRoles) => {
        userRoles.length != 0
          ? fetchedData.push(userRoles[0])
          : fetchedData.push({}); //now the fetchedData conatin the auth user details and the roles assigned to the users.
        console.log(fetchedData);
        res.send(fetchedData);
      }
    );
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
    mobile: req.body.mobile,
  };
  storeUserData(req.body, "users", (message) => {
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
