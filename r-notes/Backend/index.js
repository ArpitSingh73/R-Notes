const express = require('express');
const app = express();

const mongoConnect = require('./db');
mongoConnect();

const port = 5000;
app.use(express.json())

app.use('/api/auth', require('./routes/auth')); 
app.use('/api/notes', require('./routes/notes')); 

app.listen(5000, ()=>{
    console.log(`Listenig at http://localhost:${port}`);
})