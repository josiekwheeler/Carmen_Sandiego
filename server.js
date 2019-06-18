"use strict";
const express = require("express"); 
const app = express(); 
const cors = require("cors");
const clues = require('./clues.api');
// const routes = require("./routes"); 
app.use(cors());
app.use(express.static(__dirname + "/public")); 
app.use(express.json()); 
app.use("/", clues); 

let port = 3000;
app.listen(port, () => console.log(`Server running on PORT: ${port}.`));