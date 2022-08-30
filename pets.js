const fs = require('fs'); // allows us the api to interact with file system. 


if (!process.argv[2]) { // process.argv return an array containing the command line agruments
    console.log("Usage: node pets.js [read | create | update | delete]")
}
const command = process.argv[2]
const index = process.argv[3]

if (command === 'read') { // command equal a string
    fs.readFile('pet.json', 'utf-8', function (err, data) {// fs.readfile reads the entire file contents
        if (err) { 
            console.log('Error')
        } else {
            const petsData = JSON.parse(data) // turns string into an object
            console.log(petsData)
            
        }
    })
} 
else if (command === 'read' && index) { // command equal to a string and index
    fs.readFile('pet.json', 'utf-8', function (err, data) {
        if (error) {
            console.log('error')
        }
        else if (index < 0 || index > petsData.length) {
            console.log('not in range')
        } else{
            console.log(petsData[index])
        }
})
}
if (command === 'create') {
    fs.readFile('pet.json', 'utf-8', function (err, data) {
        if (err) {
            console.log('error')
        }
        console.log('Usage: node pets.js create AGE KIND NAME')
})
}
if(command === 'create' && index) {
    fs.readFile('pet.json', 'utf-8', function (err, data) {
let petsData = JSON.parse(data)
if (error) {
    console.log('error')
}
const age = parseInt(process.argv[3])// turns string into integer or numbers
const kind = process.argv[4];
const name = process.argv[5];
let newPet = (age, kind, name)

petsData.push(newPet)// add to the array

const petJSON = JSON.stringify(petsData)// turn value innto a string
if (age && kind && name) {
    fs.writeFile('pet.json', 'utf-8', function (err, data) {
        console.log(newPet)
})

} else {
    console.log('missing something')
    console.log('Usage: node pets.js create AGE KIND NAME')
}

 })
}