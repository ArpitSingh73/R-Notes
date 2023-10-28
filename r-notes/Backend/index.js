const express = require('express');
var app = express()
const dotenv = require("dotenv");
var cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const mongoConnect = require('./db');
const path = require("path");
dotenv.config();
app.use(cors());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(mongoSanitize());
app.use(helmet());
app.use(express.json());
mongoConnect();

const port = 5000;

app.use('/api/auth', require('./routes/auth')); 
app.use('/api/notes', require('./routes/notes')); 



// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1,  "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------


app.listen(port, ()=>{
    console.log(`Listenig at http://localhost:${port}`);
})