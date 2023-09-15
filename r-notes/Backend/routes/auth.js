const express = require('express');
const ruoter = express.Router();

const User = require("../models/Users");
const { body, validationResult } = require("express-validator");

ruoter.get('/', (req, res)=>{
  res.json({a:"Arpit", b:"Developer"})
})


module.exports = ruoter;