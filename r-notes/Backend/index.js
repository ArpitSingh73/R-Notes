const express = require('express');
var app = express()
var cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize');


app.use(cors())
app.use(mongoSanitize());

const mongoConnect = require('./db');
mongoConnect();

const port = 5000;
app.use(express.json())

app.use('/api/auth', require('./routes/auth')); 
app.use('/api/notes', require('./routes/notes')); 

app.listen(port, ()=>{
    console.log(`Listenig at http://localhost:${port}`);
})