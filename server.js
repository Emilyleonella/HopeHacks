const http = require('http')
const fs = require('fs')
const port = 5000
const path = require('path');
const express = require('express');
const res = require('express/lib/response');
const app = express()


const simplify = require('semver/ranges/simplify');








app.use(express.static("public"))

app.get('/', (req, res) =>{
res.sendFile(path.join(__dirname, "./index.html"))
})

app.get('/', (req, res) => {
    
})

app.listen(process.env.PORT || port)
