const mongoose = require("mongoose");

connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONG_URL);
    mongoose.set();
    console.log(
      `MongoDB connected: ${conn.connection.host}`.magenta.bold.underline
    );
    console.log(
      `MongoDB connected: ${conn.connection.name}`.magenta.bold.underline
    );
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
