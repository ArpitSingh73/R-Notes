const mongoose = require('mongoose');
const URI ='mongodb://localhost:27017/Trial3';



module.exports= connect = ()=>{
    mongoose.connect(URI);
}


