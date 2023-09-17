const jwt = require("jsonwebtoken");
const secret = "qwertyuiop";


const fetchUser = async(req, res, next) =>{


  const token = req.header('auth-token');

  if(!token){
    res.status(401).send({error : "Invalid token"})
  }
  try{
    const data = jwt.verify(token, secret);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Authenticate with valid token" });
  }

};

module.exports = fetchUser;

