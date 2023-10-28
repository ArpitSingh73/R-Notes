// const mongoose = require('mongoose');
// // const URI ='mongodb://localhost:27017/Trial3';
// const URI ="mongodb+srv://arpitsingh73073:notes32145@cluster0.ftjjyay.mongodb.net/?retryWrites=true&w=majority";



// module.exports= connect = ()=>{
//     mongoose.connect(URI);
// }



const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv")
dotenv.config()

const connect = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.PUBLIC_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connect;