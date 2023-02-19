const mongoose = require("mongoose");
const colors = require("colors");

const connectionString = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `Connection has been successfully established with the database ${mongoose.connection.host}`
        .bgGreen.white
    );
  } catch (error) {
    console.log(
      `Error occured while connectig to database : ${error}`.bgRed.white
    );
  }
};
module.exports = connectionString;
