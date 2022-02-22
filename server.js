const http = require("http");
const fs = require("fs");
const port = 5000;
const path = require("path");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const math = require("mathjs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/", (req, res) => {});
///app.post('/',(req,res)=>{
//let url=`http://api.mathjs.org/v4/`
//})

app.post;
app.listen(port);
