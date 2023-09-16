const mongoose = require('mongoose');
const URI ='mongodb://localhost:27017/Trial';



module.exports= connect = ()=>{
    mongoose.connect(URI);
}


