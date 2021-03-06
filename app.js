const express = require('express')
const app = express()

const port = 8080
const createdBy = process.env.CREATEDBY

app.get('/', function(req, res){
 res.send('Example of NODE JS containerized app, created by ' + createdBy)
})

app.listen(port, () => {
   console.log("server is up, check http://localhost:" + port)
})

