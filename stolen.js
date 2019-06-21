"use strict"
const express = require("express");
const stolen = express.Router();
const pool = require("./connection");


function getStolenGoods(res){
    pool.query("select * from stolenGoods LIMIT 1").then(result => res.json(result.rows));
}


stolen.get("/stolenGoods", (req, res) =>{
    getStolenGoods(res);
});

module.exports = stolen;