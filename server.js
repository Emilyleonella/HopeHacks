const http = require('http')
const fs = require('fs')
const port = 5000
const path = require('path');
const express = require('express')
const app = express()


app.use(express.static(__dirname + "./"))

app.get('/', (req, res) =>{
res.sendFile(path.join(__dirname, "./index.html"))
})

console.log(__dirname + "/style.css");
app.listen(port)



// const server = http.createServer(function(req,res){
// res.writeHead(200,{'Content-Type': 'text/html'})
// fs.readFile('index.html', function(err, data){
//   if(err){
//     res.writeHead(404)
//     res.write('This is not the page you are looking for')
//   }else{
//     res.write(data)
//   }
//   res.end()
// })
// })

// server.listen(port, function(err){
//   if(err){
//     console.log('Something went wrong', error)
//   }else{
//     console.log('Server is listening to port' + port)
//   }
// })