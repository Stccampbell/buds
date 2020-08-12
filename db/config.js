// require('dotenv').config();
const DB_NAME = process.env.DB_NAME || "buds";

const options = {
    query: (e) => {
        console.log(e.query);
    },
};

const pgp = require('pg-promise')(options);
module.exports = prgp({
    database: DB_NAME,
    port: 5432,
    host: 'localhost',
});