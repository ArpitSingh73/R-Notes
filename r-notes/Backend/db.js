const mongoose = require('mongoose');
const URI ='mongodb://localhost:27017/noteBook';



module.exports= connect = ()=>{
    mongoose.connect(URI);
}


