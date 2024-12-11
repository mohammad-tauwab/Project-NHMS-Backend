const path = require("path");
const rootDir = require("../utilities/root_directory_handler");
const { executeQuery } = require("./executequerry");

//data: data to be stored, file: file name, mode: wite or append
const storeUserData = (data, tablename, callback) => {
  let values = [];
  let userquery = "insert into users values($1,$2,$3,$4,$5,$6)";
  let authquery = "insert into authtable values($1,$2,$3,$4,$5)";
  tablename === "users"
    ? (values = [
        data.name,
        data.loginid,
        data.pwd,
        data.employeeid,
        data.mobile,
        data.roles.join(","),
      ])
    : (values = [data.name, data.loginid, data.pwd, data.mobile, data.roles]);
  let query = tablename === "users" ? userquery : authquery;

  executeQuery(query, values, (res) => {
    callback(res); //when data is written to database we are calling back the function (view controller) with the response
  });

  //The below code is required for storing the data in a file
  // const fs = require("fs");
  // const filePath = path.join(rootDir, "models", "database", filename);
  // if (mode === "write") {
  //   fs.writeFile(filePath, JSON.stringify(data), (err) => {
  //     !err
  //       ? callback("file written successfully")
  //       : callback("Error in creating User");
  //   });
  // }
  // if (mode == "append") {
  //   let tempArray = [];
  //   fs.readFile(filePath, (err, filedata) => {
  //     if (!err) {
  //       tempArray = JSON.parse(filedata); //filedata
  //       tempArray.push(data);
  //       fs.writeFile(filePath, JSON.stringify(tempArray), (err) => {
  //         !err && callback("file appended successfully");
  //       });
  //     }
  //   });
};

module.exports = {
  storeUserData,
};
