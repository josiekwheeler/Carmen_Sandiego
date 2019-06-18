"use strict"
const express = require("express");
const clues = express.Router();
const pool = require("./connection");

function selectAll(res){
    pool
    .query("select * from clues")
    .then(result => res.json(result.rows));
}
clues.get("/clues", (req, res) =>{
    selectAll(res);
});

module.exports = clues;