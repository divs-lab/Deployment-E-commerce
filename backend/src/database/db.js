const {connect} = require("mongoose");

const connectDB = async (url) => {
    try {
        await connect(url)
        console.log("Connected to database")
    } catch (error) {
      console.log(error)  
      console.log("error connecting")  
    }
}

module.exports = connectDB;
