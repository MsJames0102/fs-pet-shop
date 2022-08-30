const { application } = require('express')
const express = require('express')  //getting the express library 
const app = express()    //passing library into app 
const pets = require('./pets.json')
const PORT = 8000

//GET all 
app.get('/pets', function (req, res) {
    res.status(200)
    res.set('Content-Type', 'application/json')
    res.send(JSON.stringify(pets))
})
app.get('/pets/:id', function (req, res) {
    const id = req.params.id
    //if id is < 0, or id > pets.length-1 => log 404    
    //else     
    //if id is >= 0, && id < pets.length  => log 200     
    if (id < 0 || id > pets.length - 1) {
        res.status(404)
        res.set('Content-Type', 'text/plain')
        res.send('Not Found')
    } else if (id >= 0 && id < pets.length) {
        res.status(200)
        res.set('Content-Type', 'application/json')
        res.send(pets[id])
    }
})
app.post('/pets', function (req, res) {
    fs.readFile
    const pet = {
    name: req.params.name,
    age: req.params.age,
    kind: req.params.kind
    }
    if (pet.name || pet.age || pet.kind) {
    res.status(200)
    res.set('Content-Type', 'application/json')
    res.send(pet)
    } 
    pets.push(pet)
})

app.listen(`${PORT}`, (req, res) => {
    console.log(`Listening on port: ${PORT}`)
})
module.exports = app



