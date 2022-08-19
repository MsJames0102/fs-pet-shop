const express = require('express')
const app = express()
const PORT = 8001

app.get('/miracle', function(req, res) {
    res.end(`welcome to port ${PORT}`)
});
app.get('/miracle/1', function(req, res) {
    res.end(`Post ${PORT}`)
})
app.post('/miracle', function(req, res) {
    res.end(`please leave ${PORT}`)
})
app.post('/miracle/1', function(req, res) {
    res.end(`Please post ${PORT}`)
})

app.listen(PORT, function(req,res) {
    console.log(`Listening to ${PORT}`)
})