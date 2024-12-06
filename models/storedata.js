const path = require('path');
const rootDir = require('../utilities/root_directory_handler');

//data: data to be stored, file: file name, mode: wite or append
const storeDataInFile=(data,filename,mode,callback) =>{
    console.log(filename);
    const fs = require('fs');
    const filePath = path.join(rootDir,"models","database",filename)
    if(mode==='write'){
        fs.writeFile(filePath,JSON.stringify(data),(err)=>{
            !err?callback("user added successfully"):callback(err);
        })
    }
}

module.exports = {
    storeDataInFile
}
