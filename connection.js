"use strict"
const {Pool} = require("pg");
const cules = {
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5433,
    database: "CarmenSandiego",
    ssl: false
};
module.exports = new Pool(cules);