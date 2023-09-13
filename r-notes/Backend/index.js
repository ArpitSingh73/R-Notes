const express = require('express');
const app = express();

const mongoConnect = require('./db');
mongoConnect();

const port = 3000;

app.use('/', (req, res) =>{
    res.send("Well Done...");
});


app.listen(3000, ()=>{
    console.log(`Listenig at http://localhost:${port}`);
})