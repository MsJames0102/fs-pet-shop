const fs = require('fs'); // allows us the api to interact with file system. 

if (!process.argv[2]) { // 
    console.log("Usage: node pets.js [read | create | update | delete]")
}
const command = process.argv[2]
const index = process.argv[3]

if (command === 'read' && !index) {
    fs.readFile('pet.json', 'utf-8', function (err, data) {
        if (err) { 
            console.log('Error')
        } else {
            const petsData = JSON.parse(data)
            console.log(petsData)
            // logs Error
        }
    })
} else if (command === 'read' && index) {
    fs.readFile('pets.json')
}