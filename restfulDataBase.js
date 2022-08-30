const express = require('express'); // brings in the library
const app = express();// create an app instance
const PORT = 8001;//declare a port
const { Pool } = require('pg');// import pg library from the pool
app.use(express.json()); // This is to stringfy my body from the post or patch methods form the postman app
// connect database
const pool = new Pool({ // make a pool for database
    user: 'mekajames',
    password: '',
    host: 'localHost',
    port: 5432, // this is the postgresql is default on 
    database: 'petShop_dev'
});
// GET ALL
app.get('/pets', async (req, res) => {// create server
    try {
        let result = await pool.query("SELECT * FROM pets"); // write sql, result is the key of that object
        res.send(result.rows) // send the database
    } catch (error) {
        console.error(error.message);
    }
})
// GET 1
app.get('/pets/:id', async (req, res) => {
    try {
        let { id } = req.params; // equal the value of the id on line 23, 
        let { rows } = await pool.query('SELECT * FROM pets WHERE id = $1', [id]);// [] what ever we pass inside the array is the value we need. 
        res.send(rows)
    } catch (error) {
        console.log(error.message)
    }
})
// CREATE 1
app.post('/pets', async (req, res) => {
    try {
        const { name, age, kind } = req.body;// res.body - is a empty object{}
        let rest = await pool.query('INSERT INTO pets(name, age, kind) VALUES($1, $2, $3) RETURNING *;', [name, age, kind]);
        res.send(rest.rows);
        // let test = req.body; // go to the body on postman like order off amazon app
        // res.send(test); // tell amazon thank you; like postman.
        // console.log(test)

    } catch (error) {
        console.error(error.message)
    }
})
//DElETE 1
app.delete('/pets/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let { row } = await pool.query('DELETE FROM pets WHERE id = $1', [id]);
        res.send(row)
    } catch (error) {
        console.error(error.message);
    }
})
// UPDATE 1 put/patch
app.patch("/pets/:id", async (req, res) => {
    let { id } = req.params;
    const { name, age, kind } = req.body;
    try {
        let { row } = await pool.query('UPDATE pets SET name = $1, age = $2, kind = $3 WHERE id = $4', [name, age, kind, id]);
        res.send(row);
    } catch (error) {
        console.error(error.message)
    }
})
//listen to the port
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})