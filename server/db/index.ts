const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "yelp_db",
  password: "Postgresqlrootpassword",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
