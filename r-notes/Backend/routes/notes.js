const express = require('express');

ruoter = express.Router();


ruoter.get('/', (req, res)=>{
  res.json({a:"notes", b:"model"})
})


module.exports = ruoter;