const psqldB = require("./database/serverconnect");

//this file will take the 'query as an argument
psqldB.connect().then(() => {
  console.log("connected to psql database");
});

const executeQuery = (query, values, callback) => {
  psqldB.query(query, values, (err, res) => {
    if (!err) {
      callback(res.rows);
      console.log(res.rows);
    }
  });
};

module.exports = {
  executeQuery,
};
