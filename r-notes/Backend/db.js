const mongoose = require('mongoose');
const URI ='mongodb://localhost:27017/Trial3';
// const URI ='mongodb+srv://arpitsingh73073:arpit710@cluster0.qmkjrvi.mongodb.net/?retryWrites=true&w=majority';



module.exports= connect = ()=>{
    mongoose.connect(URI);
}

