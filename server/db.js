const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "2006",
    host: "localhost",
    port: 5432,
    database: "eternidb"
});

module.exports = pool;