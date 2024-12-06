const path = require("path");
const rootDir = require("../utilities/root_directory_handler");

//data: data to be stored, file: file name, mode: wite or append
const storeDataInFile = (data, filename, mode, callback) => {
  const fs = require("fs");
  const filePath = path.join(rootDir, "models", "database", filename);
  if (mode === "write") {
    fs.writeFile(filePath, JSON.stringify(data), (err) => {
      !err
        ? callback("file written successfully")
        : callback("Error in creating User");
    });
  }
  if (mode == "append") {
    let tempArray = [];
    fs.readFile(filePath, (err, filedata) => {
      if (!err) {
        tempArray = JSON.parse(filedata); //filedata
        tempArray.push(data);
        fs.writeFile(filePath, JSON.stringify(tempArray), (err) => {
          !err && callback("file appended successfully");
        });
      }
    });
  }
};

module.exports = {
  storeDataInFile,
};
