const express = require('express');
var cors = require('cors')
var app = express()

app.use(cors())

const mongoConnect = require('./db');
mongoConnect();

const port = 5000;
app.use(express.json())

app.use('/api/auth', require('./routes/auth')); 
app.use('/api/notes', require('./routes/notes')); 

app.listen(port, ()=>{
    console.log(`Listenig at http://localhost:${port}`);
})