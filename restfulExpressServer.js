const express = require('express');
const app = express();
const fs = require('fs')
const PORT = 8001;
app.use(express.json());
app.post("/pets", function(req, res) {
    console.log(req.body) //Able to access body from postman (must enter info in Postman using => body, raw, JSON)
    fs.readFile('./pets.json', "utf-8", (err,data) => {
        if (err) throw err;
        const parsedPets = JSON.parse(data)
        parsedPets.push(req.body)
        const stringifiedPets = JSON.stringify(parsedPets);
        res.send(stringifiedPets);
        console.log(stringifiedPets)
        })
    const newPet = [{"name": "cornflake", "age": 3, "kind": "parakeet"}]
    fs.writeFile('./pets.json', newPet, (err) => {
        if (err){
         throw err
        }
        res.status(200)
        res.setHeader('Content-Type', 'application/json');
        res.send(stringifiedPets)
    })
})
app.get("/pets/3", function(req, res) {
    res.status(200)
    res.setHeader('Content-Type', 'application/json');
    res.send(req.body)
})
app.patch("/pets/3", function(req, res) {
    const petdata = require('./pets.json')
    const updatePet = {"name": "fido"}
    petdata.push(updatePet)
    res.status(200)
    res.setHeader('Content-Type', 'application/json');
    res.send(req.body)
})
app.get("/pets/3", function(req, res) {
    res.status(200)
    res.setHeader('Content-Type', 'application/json');
    res.send(req.body)
})
app.delete("/pets/3", function(req, res) {
    res.status(200)
    res.setHeader('Content-Type', 'application/json');
    res.send(req.body)
})
app.get("/pets/3", function(req, res) {
    res.status(404)
    res.setHeader('Content-Type, text/plain')
    res.send(req.body)
})
app.listen(`${PORT}`, () => {
    console.log(`Listening on ${PORT}`)
})
////DO NOT MODIFY - ORIGINAL CONTENT
// app.post("/pets", function(req, res) {
//     console.log(req.body) //Able to access body from postman (must enter info in Postman using => body, raw, JSON)
//     fs.readFile('./pets.json', "utf-8", (err,data) => {
//         if (err) throw err;
//         const parsedPets = JSON.parse(data)
//         parsedPets.push(req.body)
//         const stringifiedPets = JSON.stringify(parsedPets);
//         res.send(stringifiedPets);
//         console.log(stringifiedPets)
//         })
//     fs.writeFile('./pets.json', (err) => {
//         if (err) throw err;
//         res.status(200)
//         res.contentType('application/json')
//         res.send(stringifiedPets)
//     })
// })