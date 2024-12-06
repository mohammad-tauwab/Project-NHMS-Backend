const { checkAuthUser } = require("../models/chekUserAuth");
const { storeDataInFile } = require("../models/storedata");
const rootDir = require('../utilities/root_directory_handler');
const path = require('path');


const home = (req, res, next) => {
  res.render("home");
};

const userAuth = (req, res, next) => {
  checkAuthUser(req.body, (validUserDetail) => {
    console.log(JSON.stringify(validUserDetail));
    res.send(JSON.stringify(validUserDetail));
  });
};

const addUser = (req,res,next)=>{
  let filename =(req.body.name+'.txt').toString();
  storeDataInFile(req.body,filename,'write',(message)=>{
    res.send(message);
  })
 
}

module.exports = {
  home,
  userAuth,
  addUser,
};
