const psqlserverOb = {
  user: "postgres",
  password: "Sahil@8237",
  database: "node_local_database",
  host: "127.0.0.1",
  port: 5432,
};

const { Pool } = require("pg");

const psqldB = new Pool(psqlserverOb);

module.exports = psqldB;
