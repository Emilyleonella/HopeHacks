const http = require('http')
const fs = require('fs')
const port = 5000

// const express = require('express')
// const app = express()

// app.get('/', (req, res) =>{
// res.send
// })
// app.listen(5000)



// const server = http.createServer(function(req,res){


// })
const server = http.createServer(function(req,res){
res.writeHead(200,{'Content-Type': 'text/html'})
fs.readFile('index.html', function(err, data){
  if(err){
    res.writeHead(404)
    res.write('This is not the page you are looking for')
  }else{
    res.write(data)
  }
  res.end()
})
})

server.listen(port, function(err){
  if(err){
    console.log('Something went wrong', error)
  }else{
    console.log('Server is listening to port' + port)
  }
})