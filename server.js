const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const bootcampsRouter = require("./routes/bootcamps.router");
const logger = require("./middlewares/logger");
const connectDB = require("./config/db.connection");

dotenv.config({ path: "config/config.env" });

// Connect to database

connectDB();
const app = express();

// Middleware

app.use(express.json());

// Routes
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/bootcamps", bootcampsRouter);

// Error handling middleware

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV}  mode on PORT ${PORT}`.yellow
      .bold
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.error(`Unhandled rejection: ${err.message}`.red.bold);
  // server.close(process.exit(1));
});
