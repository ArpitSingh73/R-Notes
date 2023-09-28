const express = require('express');
var app = express()
var cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const mongoConnect = require('./db');

app.use(cors());
app.use(mongoSanitize());
app.use(helmet);
app.use(express.json());
mongoConnect();

const port = 5000;

app.use('/api/auth', require('./routes/auth')); 
app.use('/api/notes', require('./routes/notes')); 

app.listen(port, ()=>{
    console.log(`Listenig at http://localhost:${port}`);
})