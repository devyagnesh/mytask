const mongoose = require("mongoose");
const MONGO_URI = process.env.SERVER_PORT;

 
 const Connect = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URL;
    mongoose.connect(MONGO_URI);
    console.log(`DATABASE CONNECTED SUCCESSFULLY !!`)
  } catch (error) {
    console.log(error)
  }
};


module.exports = Connect