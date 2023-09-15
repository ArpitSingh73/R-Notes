const express = require('express');

ruoter = express.Router();


ruoter.get('/', (req, res)=>{
  res.json({a:"Arpit", b:"Developer"})
})


module.exports = ruoter;